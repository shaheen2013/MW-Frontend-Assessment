import { tags } from "../utils/TagList";

export default function BlogTags() {
  return (
    <div className="flex flex-wrap justify-center items-start gap-4 my-12">
      {tags.map((tag, index) => (
        <div
          key={index}
          className={`px-4 py-2 rounded-xl border flex items-center justify-between gap-2 cursor-pointer ${
            tag.name === "All"
              ? "border-[#0060AF] bg-[#0060AF] text-white"
              : "border-[#D0D5DD] text-[#344054]"
          }`}
        >
          <span className="text-[18px] font-medium leading-[26px]">
            {tag.name}
          </span>
          <span
            className={`text-center text-[14px] leading-[13px] font-semibold bg-[#EAECF0] px-2 py-1 rounded-full ${
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
