
import { GrLinkUp } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import "./index.style.css";
import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

const Blogcard = ({post}) => {

  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative w-[600px] h-[450px] rounded-xl" onMouseEnter={() => {
      setHovered(true)
    }}
    onMouseLeave={() => {
      setHovered(false)
    }}
    >
      {/* updated time */}
      <div className="absolute right-0 top-0 bg-sky-50 py-2 px-8 rounded-tr-xl rounded-bl-xl text-sky-700 font-bold flex items-center justify-center gap-2 text-lg">
        <FaRegClock /> 8 min read
      </div>
      {/* card image */}
      <img src={post?.image} className="rounded-xl w-full h-full"/>
      {/* redirect button */}
      <button className="absolute top-[30%] left-[50%] translate-y-[-30%] translate-x-[-50%] bg-sky-50 opacity-80 text-sky-700 p-4 rounded-full">
        <GrLinkUp className="h-10 w-10 rotate-45" />
      </button>
      {/* Bottom author block */}
      <div className="flex flex-col absolute bottom-0 left-0 w-full">

        <div className="flex items-center justify-between w-full">
            {/* Author info */}
            <div className="flex bg-white pt-4 pb-0 px-4 rounded-t-xl gap-4 items-center relative z-30">
              {/* author avatar */}
              <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
                <img src={post?.author?.image} className="h-full w-full object-cover" />
              </div>
              {/* author name */}
              <div className="flex flex-col">
                  <h4>{post?.author?.full_name}</h4>
                  <p>20 Jan 2022</p>
              </div>
              {/* curve */}
             <img src="/images/rect.png" className="absolute top-[41px] right-[-41px]" />
            </div>

            {/* designations block*/}
            <div className="flex items-center gap-4 pr-5">
                <span className="bg-green-200 py-1 px-4 rounded-xl">UX/UI</span>
                <span className="bg-green-200 py-1 px-4 rounded-xl">Design</span>
            </div>
        </div>
        {/* blog info section */}
        <div className="flex flex-col bg-white p-4 rounded-tr-xl">
            <h4 className="text-[25px] font-bold text-sky-950 w-[80%]">UX Lessons That We Can Learn from &quot;Threads&quot;</h4>
            <MotionConfig>

              <motion.p className={["line-clamp-2 w-[80%]"].filter(Boolean).join(' ')} 
                
                animate={{
                  display: hovered ? "block": "none",
                  scale: hovered ? "1": "0"
                }}

              >
              UX Lessons That We Can Learn from &quot;Threads&quot; Often found on welcome screen, decorative animations are fantastic way
              </motion.p>
            </MotionConfig>
        </div>

      </div>

    </div>
  )
}

export default Blogcard
