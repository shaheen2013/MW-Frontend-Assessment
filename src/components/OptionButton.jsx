import React, { useState } from 'react';

const OptionButton = ({item}) => {
    
    return (
        <div>
          <button
            className={`sm:py-[11px] py-1  sm:px-6 px-4 border rounded-3xl ${item?.isActive ? "text-white" : ""} ${item?.isActive ? "bg-[#0060AF]" : "bg-white"}`}
          >
            {item?.title}{" "}
            {
                item?.title !== "All" ? <span
                className={`px-[6px] py-1  rounded-lg ms-1 ${item?.isActive ? "text-white" : ""} bg-[#EAECF0] h-[20px] `}
              >
                {item?.Value}
              </span> : ""
            }
            
          </button>
        </div>
    );
};

export default OptionButton;