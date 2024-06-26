import { useState } from "react";
import BlogCard from "./BlogCard";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogCardList() {
  const [blogs, setBlogs] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="mx-4 md:mx-[50px] mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {blogs.map((item, i) => (
          <BlogCard key={i} blogs={item} />
        ))}
      </div>

      <div className="flex items-center justify-center py-8 md:py-12">
        <button className="rounded-lg bg-[#0060AF] text-white px-4 md:px-6 py-2 md:py-3 hover:px-6 md:hover:px-8 transition-all duration-500">
          <FaArrowRightLong className="text-xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
}
