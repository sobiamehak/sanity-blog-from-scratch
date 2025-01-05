import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { Blog } from '@/app/page';
import Comments from '../../comments/page';
interface Params {
 params:{
slug : string
   }
}

const Fullpage = async ( params:Params) => {
const {slug} = params.params;
const data:Blog = await client.fetch(`*[_type == "blog" && slug.current == $slug]{
  heading,
    description,
    "slug": slug.current,
    "imageUrl": image.asset->url
}[0]`,{slug})

  return (
    <main>
    <div>
      <Image className='rounded-md mt-10 mg:ml-[100px] lg:ml-[300px] h-[200px] w-[400px] lg:w-[600px] lg:h-[300px]'
       src={data.imageUrl ? data.imageUrl : "not found"}
        alt={data.heading}  height={600} width={600}/>
      <div>
        <h1 className='text-3xl font-bold my-8 '>
{data.heading}
        </h1>
        <p>
{data.description}
        </p>
      </div>
    </div>
    <p>
      {data.heading}
    </p>
<Comments/>

  
    </main>
  )
}

export default Fullpage 
