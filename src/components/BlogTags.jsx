import { tags } from "../utils/TagList";

export default function BlogTags() {
  return (
    <div className="flex flex-wrap justify-center items-start gap-4 my-6 md:my-12">
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`px-3 py-2 md:px-4 md:py-2 rounded-xl border flex items-center justify-between gap-2 cursor-pointer ${
            tag.name === "All"
              ? "border-[#0060AF] bg-[#0060AF] text-white"
              : "border-[#D0D5DD] text-[#344054]"
          }`}
        >
          <span className="text-[14px] md:text-[18px] font-medium leading-[20px] md:leading-[26px]">
            {tag.name}
          </span>
          <span
            className={`text-center text-[12px] md:text-[14px] leading-[12px] md:leading-[13px] font-semibold bg-[#EAECF0] px-2 py-1 rounded-full ${
              tag.name === "All" ? "text-[#344054]" : ""
            }`}
          >
            {tag.count}
          </span>
        </div>
      ))}
    </div>
  );
}
