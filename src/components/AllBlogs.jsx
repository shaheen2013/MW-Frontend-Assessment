import Blogcard from "./BlogCard";
import {filter_option} from "../data/filter_option";
import { useEffect, useState } from "react";


const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
     const fetchblog = async () => {
      const res = await fetch('https://hr.mediusware.xyz/api/website/blogs', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(await res.json());
      setBlogs(await res.json());
    }
   fetchblog();
  }, [])

  useEffect(() => {
    console.log(blogs)
  }, [blogs])


  const handleFilterButtonClick = (path) => {
    console.log("data loading path", path);
  }

  return (
    <div className="w-full pb-5">

      <div className="flex items-center justify-between gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold w-full text-center">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>
      {/* 
      ////////////////////
      Filter buttons
      ////////////////////
      */}
      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        {
          filter_option.map((data, id) => (
            <div key={id}>
              <button
                className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-xl  ${data?.path === "All" ? "bg-[#0060AF] text-white": "bg-white"}`}
                onClick={() => handleFilterButtonClick(data?.path)}
              >
                {data?.path}
                {
                  data?.number_of_post &&
                <span className={`px-[8px] py-[2px]  rounded-lg ms-1 bg-[#EAECF0] h-[20px] `}>
                  {data?.number_of_post}
                </span>
                }
              </button>
          </div>
  
          ))
        }
       
        {/* <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-xl text-white bg-[#0060AF] text-[18px] `}
          >
            All{" "}
            <span
              className={`px-[6px] py-1  rounded-lg ms-1  text-[#008F79] bg-[#EAECF0] h-[20px] `}
            >
              10
            </span>
          </button>
        </div>

        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-xl bg-white`}
          >
            Frontend{" "}
            <span className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px] `}>
              5
            </span>
          </button>
        </div>

        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-xl bg-white`}
          >
            Node.js{" "}
            <span className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px]`}>
              5
            </span>
          </button>
        </div> */}


      </div>

      {/* All blog post */}
      <div className="w-full grid grid-cols-3 gap-4">
            <Blogcard />
            <Blogcard />
            <Blogcard />
      </div>


    </div>
  );
};

export default AllBlogs;
