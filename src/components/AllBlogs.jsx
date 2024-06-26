import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("case-studies");
  const getBlogCategories = async () => {
    const res = await fetch(
      "https://hr.mediusware.xyz/api/website/blogs/categories/"
    );
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    getBlogCategories();
  }, []);

  return (
    <div className="container">
      <div className="flex items-center justify-between gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>
      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        {categories?.map((item, index) => (
          <div key={index}>
            <button
              className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-xl ${item.slug === activeCategory ? "bg-[#0060AF] text-white" : "bg-white" } flex items-center justify-center`}
            >
              {item.name}{" "}
              <span
                className={`rounded-full ms-1  text-slate-700 bg-[#EAECF0] h-[20px] w-[20px] flex items-center justify-center`}
              >
                {item.total_blog}
              </span>
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 pb-4 gap-y-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default AllBlogs;
