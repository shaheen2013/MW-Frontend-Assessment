function BlogCard() {
  return (
    <div className="relative group/item overflow-hidden max-w-[440px] max-h-[544px] rounded-2xl cursor-pointer">
      <img
        src="/blogImage.png"
        alt=""
        className="rounded-2xl group-hover/item:scale-125 overflow-hidden duration-500"
      />
      <div className="absolute bottom-0 w-full bg-[url('/blogFooterBG.png')] bg-no-repeat rounded-br-2xl h-[152px] overflow-hidden group-hover/item:h-[220px] transition-all duration-500">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-start rounded-tl-2xl rounded-tr-2xl pl-4 pt-4">
            <img src="/Avatar.png" alt="" />
            <div className="flex flex-col items-start">
              <p className="text-sky-950 text-sm font-bold">Ronald Richards</p>
              <p className="text-gray-500 text-sm font-normal">20 Jan 2022</p>
            </div>
          </div>
          <div className="pr-4">
            <p className="px-3 py-1 bg-emerald-100 rounded-lg flex justify-start items-center text-center text-sky-950 text-xs font-bold">
              UX/UI
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-sky-950 text-2xl font-medium p-4">
            UX Lessons That We Can Learn from “Threads”
          </p>
          <p className="text-gray-600 text-base font-normal pt-3 bg-white pb-8 pl-4 -mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolorem magni ipsam nulla , voluptates excepturi?...
          </p>
        </div>
      </div>
      <div className="px-6 py-2 bg-sky-100 rounded-tr-xl rounded-bl-2xl absolute top-0 right-0 flex gap-2 items-center">
        <img src="/clock.svg" />
        <p className="text-sky-700 text-base font-medium">8 min read</p>
      </div>
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-50 p-4 rounded-full opacity-0 group-hover/item:opacity-50 duration-500">
        <img src="/right-arrow.png" className="w-10 -rotate-45" alt="" />
      </div>
    </div>
  );
}

export default BlogCard;
