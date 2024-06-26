import { useEffect, useState } from "react";
import { buttonList } from "../utils/buttonList";
import OptionButton from "./OptionButton";
import { FaRegClock } from "react-icons/fa";

const AllBlogs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://hr.mediusware.xyz/api/website/blogs');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  console.log(data?.count);

  return (
    <div className="px-[150px]">
      <div className="w-full flex items-center justify-center gap-3 md:flex-row flex-col">
        <p className="sm:text-[48px] text-2xl leading-8 font-bold">
          All <span className="text-[#00A88E]"> Blogs</span>
        </p>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-4 sm:py-12 py-5">
        {
          buttonList?.map((item, index) => <OptionButton key={index} item={item} />)
        }
        {/* <OptionButton title="All" value="10" />
        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl text-white bg-[#0060AF]  `}
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
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl bg-white`}
          >
            Frontend{" "}
            <span className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px] `}>
              5
            </span>
          </button>
        </div>
        <div>
          <button
            className={` sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl bg-white`}
          >
            Node.js{" "}
            <span className={`px-[6px] py-1  rounded-lg ms-1 bg-[#EAECF0] h-[20px]`}>
              5
            </span>
          </button>
        </div> */}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center gap-3">
        {
          data?.count>0 && data?.results?.map((item, index) => <><div className="h-[400px] border rounded-xl bg-[url('/images.jpeg')] bg-no-repeat bg-cover relative">
          <div className="w-full flex items-center justify-end">
            <div className="bg-gray-300 rounded-tr-xl rounded-bl-xl px-5 py-2 flex items-center justify-between gap-3">
              <FaRegClock className="text-[#18304e]"/>
              <span className="text-[#18304e]">{item?.read_time_minute} min read</span>
            </div>
          </div>

            <div className="absolute bottom-0 w-full ">
              <div className="w-full flex items-center justify-between">
                <div className=" w-[40%] flex items-end justify-start bg-white rounded-t-xl p-3">
                  <div className="flex items-center justify-start gap-3">
                    <div className="w-[50px] h-[50px] rounded-full">
                      <img src={item?.author?.image} className="rounded-full"/>
                    </div>
                    <div className="text-gray-500">
                      <h3>{item?.author?.full_name}</h3>
                      <h3>20 Jan 2022</h3>
                    </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 pr-5">
                <span className="px-3 py-1 rounded-lg text-[12px] bg-emerald-300">UX/UI</span>
                <span className="px-3 py-1 rounded-lg text-[12px] bg-emerald-300">Design</span>
              </div>
            </div>
            <div className="bg-white rounded-tr-xl p-5">
              <h1 className="text-[25px] text-[#002B4F]">{item?.title}</h1>
            </div>
            <div className="bg-white rounded-b-xl px-5 py-1">
              <div className="text-[25px] text-[#002B4F] overflow-hidden">
                <div className="overflow-ellipsis line-clamp-2 lead">
                  <span className="text-[15px]">{item?.short_description}</span>
                </div>
              </div>
            </div>
          </div>
          
        </div></>)
        }
        
        {/* <div className="h-[400px] border">
jhd
        </div>
        <div className="h-[400px] border">
jhd
        </div>
        <div className="h-[400px] border">
jhd
        </div>
        <div className="h-[400px] border">
jhd
        </div> */}
      </div>
    </div>
  );
};

export default AllBlogs;
