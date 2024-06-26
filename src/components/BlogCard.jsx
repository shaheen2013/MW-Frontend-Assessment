function BlogCard(props) {
  return (
    <div className="relative group/item overflow-hidden max-w-[440px] max-h-[380px] rounded-2xl cursor-pointer">
      <img
        src={props?.data?.image}
        alt=""
        className="rounded-2xl group-hover/item:scale-125 w-[440px] h-[380px] overflow-hidden duration-500"
      />
      <div className="absolute bottom-0 w-full bg-[url('/blogFooterBG.png')] bg-no-repeat rounded-br-2xl h-[152px] overflow-hidden group-hover/item:h-[220px] transition-all duration-500">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-start rounded-tl-2xl rounded-tr-2xl pl-4 pt-4">
            <img
              src={props?.data?.author?.image}
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="flex flex-col items-start">
              <p className="text-sky-950 text-sm font-bold">
                {props?.data?.author?.full_name}
              </p>
              <p className="text-gray-500 text-sm font-normal">
                {new Date(props?.data?.created_at).toDateString()}
              </p>
            </div>
          </div>
          <div className="pr-4 flex gap-2 items-center">
            {props?.data?.categories?.map((item, index) => (
              <p
                key={index}
                className="px-3 py-1 bg-emerald-100 rounded-lg flex justify-start items-center text-center text-sky-950 text-xs font-bold"
              >
                {item?.name}
              </p>
            ))}
          </div>
        </div>
        <div className="">
          <p className="text-sky-950 text-2xl font-medium p-4">
            {props?.data?.title.length > 50
              ? props?.data?.title.slice(0, 50) + "..."
              : props?.data?.title}
          </p>
          <p className="text-gray-600 text-base font-normal pt-3 bg-white pb-8 pl-4 -mt-4">
            {props?.data?.short_description.length > 60
              ? props?.data?.short_description.slice(0, 60) + "..."
              : props?.data?.short_description}
          </p>
        </div>
      </div>
      <div className="px-6 py-2 bg-sky-100 rounded-tr-xl rounded-bl-2xl absolute top-0 right-0 flex gap-2 items-center">
        <img src="/clock.svg" />
        <p className="text-sky-700 text-base font-medium">
          {props?.data?.read_time_minute} min read
        </p>
      </div>
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-50 p-4 rounded-full opacity-0 group-hover/item:opacity-50 duration-500">
        <img src="/right-arrow.png" className="w-10 -rotate-45" alt="" />
      </div>
    </div>
  );
}

export default BlogCard;
