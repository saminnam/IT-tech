import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../Components/PageHeader";
import Moto from "../Components/Moto";
import PopularCourse from "../Components/PopularCourse";

const BlogDetail = () => {
  const { id } = useParams();
  const blogPosts = [
    {
      id: 1,
      category: "Technology",
      imageUrl:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg",
      title: "How to manage your remote team?",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      content:
        "Objectively redefine out-of-the-box technologies for multimedia based networks. Proactively the architect economically sound synergy with progressive value. Authoritatively engage out-of-is the box users for interoperable core competencies. Appropriately pontificate B2B strategic theme of time areas rather than professional metrics. Monotonectally visualize high-payoff manufactured products with professional metrics. Continually synergize extensive imperatives whereas real-time e-services. Enthusiastically online promote technically sound core competencies via flexible.",
      author: "Martin Jones",
      date: "June 12, 2021",
    },
    {
      id: 2,
      category: "Marketing",
      imageUrl:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg",
      title: "6 Product launching emails you want to use on the next campaign.",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      content:
        "Objectively redefine out-of-the-box technologies for multimedia based networks. Proactively the architect economically sound synergy with progressive value. Authoritatively engage out-of-is the box users for interoperable core competencies. Appropriately pontificate B2B strategic theme of time areas rather than professional metrics. Monotonectally visualize high-payoff manufactured products with professional metrics. Continually synergize extensive imperatives whereas real-time e-services. Enthusiastically online promote technically sound core competencies via flexible.",
      author: "Martin Jones",
      date: "June 12, 2021",
    },
    {
      id: 3,
      category: "Marketing",
      imageUrl:
        "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg",
      title: "Learn from the best: 7 email marketing ideas you can use",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      content:
        "Objectively redefine out-of-the-box technologies for multimedia based networks. Proactively the architect economically sound synergy with progressive value. Authoritatively engage out-of-is the box users for interoperable core competencies. Appropriately pontificate B2B strategic theme of time areas rather than professional metrics. Monotonectally visualize high-payoff manufactured products with professional metrics. Continually synergize extensive imperatives whereas real-time e-services. Enthusiastically online promote technically sound core competencies via flexible.",
      author: "Martin Jones",
      date: "June 12, 2021",
    },
  ];

  const blog = blogPosts.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <main>
      <PageHeader title={"Our Blogs"} pageinfo={"Blog"} />
      <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8  py-12 md:py-16 lg:py-20">
        <p className=" flex justify-start gap-5 items-center">
          <span className="font-semibold text-lg text-main-color">
            {blog.author}
          </span>
          <span className="flex items-center gap-1 text-gray-700">
            {" "}
            <i className="bi bi-calendar"></i>
            {blog.date}
          </span>
        </p>
        <h1 className="text-3xl font-bold">{blog.title}</h1>

        <img src={blog.imageUrl} alt={blog.title} className="mt-6 w-full" />
        <p className="mt-6 text-gray-600 text-lg">{blog.content}</p>
      </section>
      <Moto />
      <PopularCourse />
    </main>
  );
};

export default BlogDetail;
