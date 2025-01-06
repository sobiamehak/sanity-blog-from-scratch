
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

  export interface Blog {
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
  
}

export default async function Home() {
  const data: Blog[] = await client.fetch(`
    *[_type == "blog"]{
      heading,
      description,
      "slug": slug.current,
      "imageUrl": image.asset->url
    }
  `);

  console.log(data);

  return (
    <div>
      <div className="text-red-900  text-xl md:text-5xl p-2 text-center  my-6  ">
        WELCOME TO MY BLOG WEB
      </div>

      <main className="pt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">

          {data.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <div className="p-4 shadow-md rounded-md max-w-[350px] bg-slate-100 hover:scale-105 active:scale-100 transition-all cursor-pointer">
                
                <div className="relative w-full h-64"> {/* Wrapping image in a relative container */}
                  <Image
                    className="object-cover rounded-md"
                    src={blog.imageUrl}
                    alt={blog.heading}
                    layout="fill" // This will make the image responsive
                    objectFit="cover" // Ensures the image covers the container without stretching
                    priority
                  />
                </div>
                
                <div className="p-2 pt-4">
                  <h1 className="font-bold line-clamp-2">{blog.heading}</h1>
                  <p className="text-sm line-clamp-2 pt-2">{blog.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
