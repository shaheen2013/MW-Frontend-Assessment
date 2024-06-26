import { FiClock } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";

export default function BlogCard({ blogs }) {
  return (
    <div className="rounded-2xl overflow-hidden relative group w-full h-[420px]">
      <img
        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Blog cover"
        className="w-full h-full"
      />

      <div className="text-4xl absolute top-[18%] left-[46%] bg-white rounded-full p-8 opacity-0 group-hover:opacity-75 transition-all duration-700 ease-in-out">
        <FaArrowUpLong className="text-primary-3 rotate-45" />
      </div>

      <div className="absolute top-0 right-0 flex items-center gap-2 bg-[#E6EFF7] rounded-bl-xl px-6 py-2 font-medium text-primary-blue">
        <FiClock />
        <span>8 min read</span>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-4 bg-white w-[40%] rounded-t-2xl px-4 pt-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Author"
              className="w-[40px] h-[40px] rounded-full"
            />
            <div className="font-circular font-bold leading-5 text-sm">
              <h4 className="text-[#002B4F]">John Doe</h4>
              <h5 className="text-[#667085]">20 Jan, 2022</h5>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold mr-4 mb-4">
            <span className="bg-[#C2EAE4] rounded-lg px-3 py-1">UI/UX</span>
            <span className="bg-[#C2EAE4] rounded-lg px-3 py-1">Design</span>
          </div>
        </div>

        <div className="bg-white w-full p-4 rounded-tr-2xl">
          <h3 className="text-2xl font-semibold leading-8 text-primary-blue">
            UX Lessons That We Can Learn from “Threads” Programming
          </h3>
          <p className="opacity-0 max-h-0 mt-4 overflow-hidden transition-all duration-1000 ease-in-out group-hover:opacity-100 group-hover:max-h-screen line-clamp-2 text-[#667085]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
        </div>
      </div>
    </div>
  );
}
