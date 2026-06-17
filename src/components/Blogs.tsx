import { useEffect, useRef } from 'react'
import { BlogsData } from '../constants'


export default function Blogs() {
   const blogs = useRef(null);

   useEffect(() => {
      console.log(blogs)
   }, [])

   return (
      <div ref={blogs} className="blogs felx max-md:flex-col gap-3 px-6 py-3">
         {BlogsData.map((blog, i) => (
            <div className="container">
               <title>blog.title</title>
               {blog.content}
            </div>
         ))}
      </div>
   )
}