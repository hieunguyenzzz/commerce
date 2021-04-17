import React from 'react'
import Image from 'next/image'
import { BlogData } from './BlogData'
interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  return (
    <div className="mb-2 md:mb-14 md:container mx-auto">
      <div className="pb-5 ">
        <h1 className="text-5xl font-bold text-center ">Our Blog</h1>
        <hr className="w-20 my-4 border-2 border-primary-new text-center mx-auto" />
      </div>

      <div className="mx-auto lg:px-12 flex flex-wrap">
        {BlogData?.map((blog) => (
          <div className="mt-6 px-4 w-full md:w-6/12 lg:w-4/12 group">
            <Image
              src={blog.img}
              alt="Picture of the author"
              className=""
              width={360}
              height={233}
            />
            <div>
              <h6 className="font-bold text-lg ">{blog.title}</h6>
              <hr className="w-2/12 border-t-2 my-2 group-hover:border-primary-new" />
              <div className="flex ">
                <div className="text-sm md:text-md"> {blog.date} /</div>
                <div className="text-sm md:text-md ml-2 hover:text-primary-new cursor-pointer	">
                  {blog.author} /{' '}
                </div>
                <div className="text-sm md:text-md ml-2 text-gray-400">
                  in
                  <span className="ml-1 text-black hover:text-primary-new cursor-pointer	">
                    {blog.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
