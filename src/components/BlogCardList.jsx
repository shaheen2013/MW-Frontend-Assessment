import { useState } from "react";
import BlogCard from "./BlogCard";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogCardList() {
  const [blogs, setBlogs] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="mx-[50px] mb-12">
      <div className="grid grid-cols-3 gap-8">
        {blogs.map((item, i) => (
          <BlogCard key={i} blogs={item} />
        ))}
      </div>

      <div className="flex items-center justify-center py-12">
        <button className="rounded-lg bg-[#0060AF] text-white px-6 py-3 hover:px-8 transition-all duration-500">
          <FaArrowRightLong className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
