
//  import Comments from '../../comments/page';




//  const Fullpage = async (params:Params) => {
//  const {slug} = params.params;
//  const data:Blog = await client.fetch(`*[_type == "blog" && slug.current == $slug]{
//   heading,
//     description,
//     "slug": slug.current,
//      "imageUrl": image.asset->url
//  }[0]`,{slug})

//    return (
//     <main>
//      <div>       <Image className='rounded-md mt-10 mg:ml-[100px] lg:ml-[300px] h-[200px] w-[400px] lg:w-[600px] lg:h-[300px]'
//        src={data.imageUrl}
//          alt={data.heading}  height={600} width={600}/>
//        <div>
//         <h1 className='text-3xl font-bold my-8 '>
//  {data.heading}
//          </h1>
//          <p>
// {data.description}        </p>
//       </div>
//      </div>
   
//  <Comments/>

  
//      </main>
//    )
//  }

//  export default Fullpage 
"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Blog } from "@/app/page";
import Image from "next/image";
import CommentSec from "@/app/comments/page";
import { FaSpinner } from "react-icons/fa";


function Page({ params }: { params: Promise<{ slug: string }> }) {
  const [fetchdata, setdata] = useState<Blog | null>(null);
const unwraped = React.use(params)
  useEffect(() => {
    if (unwraped.slug) {
      fetchData(unwraped.slug);
    }
  }, [unwraped.slug]);

  const fetchData = async (slug: string) => {
    try {
      const data: Blog[] = await client.fetch(
        `*[_type == "blog" && slug.current == $slug]{
          heading,
          description,
          "slug": slug.current,
          "imageUrl": image.asset->url
        }`,
        { slug }
      );

      if (!data || data.length === 0) {
        console.error("Invalid data");
        return;
      }

      // Sanity query returns an array, so we take the first item
      setdata(data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {fetchdata ? (
        <>
         <main>
     <div>
       <Image className='rounded-md mt-10 mg:ml-[100px] lg:ml-[300px] h-[200px] w-[400px] lg:w-[600px] lg:h-[300px]'
       src={fetchdata.imageUrl}
         alt={fetchdata.heading}  height={600} width={600}/>
       <div>
        <h1 className='text-3xl font-bold my-8 '>
 {fetchdata.heading}
         </h1>
         <p>
{fetchdata.description}        </p>
      </div>
     </div>
  
 <CommentSec/>

     </main>
          
        </>
      ) : (
        <div className="flex justify-center items-center h-[100vh]">
        <div>
          <FaSpinner className="animate-spin text-4xl ml-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-blue-400">Loading...</h1>
        </div>
      </div>
      )}
    </div>
  );
}

export default Page;

