import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import Moto from "../Components/Moto";
import Offer from '../Components/Offer'
import axios from "axios";

const Blog = () => {
  const [blogPosts , setBlogPosts] = useState([])
  useEffect(()=>{
    fetcher()
  } , [])

  const fetcher=()=>{
    axios.get('http://localhost:5000/api/blogs/').then((res)=> setBlogPosts(res.data)).catch((err)=> console.log(err)
    )
  }

  return (
    <main>
      <PageHeader title={"Our Blogs"}  pageinfo={'Blog'}/>
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Latest from blog
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          {blogPosts.map((post) => (
            <div key={post.id}>
              <Link to={`/blog/${post.id}`} className="block aspect-w-4 aspect-h-3">
                <img
                  className="object-cover w-full h-full"
                  src={post.imageUrl}
                  alt={post.title}
                />
              </Link>
              <span
                className={`inline-flex text-xs font-semibold tracking-widest uppercase rounded-full my-4`}
              >
                {post.category}
              </span>
              <p className=" text-xl font-semibold">
                <Link to={`/blog/${post.id}`} className="text-black">
                  {post.title}
                </Link>
              </p>
              <p className="mt-4 text-gray-600">{post.description}</p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {post.author} . {post.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Moto/>
    <Offer/>
    </main>

  );
};

export default Blog;
