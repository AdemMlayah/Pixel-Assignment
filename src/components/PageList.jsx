import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function Page({ title }) {
  const [hover, setHover] = useState(false);
  const [checked, setChecked] = useState(false);

  const buttonClass = `h-[23px] w-[23px] border rounded-md flex justify-center items-center transition-colors duration-300
    ${
      hover && !checked
        ? "border-[#6d7070] border-opacity-100"
        : "border-opacity-60"
    }
    ${
      checked && !hover
        ? "bg-[#2469F6]"
        : checked && hover
        ? "bg-[#5087F8]"
        : "bg-transparent"
    }
  `;

  return (
    <div
      onClick={() => setChecked(!checked)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-[370px] h-[42px] flex justify-between items-center px-4 hover:cursor-pointer"
    >
      <span>{title}</span>
      <button className={buttonClass}>
        {checked && <IoMdCheckmark size={20} className="text-white" />}
        {hover && !checked && (
          <IoMdCheckmark size={20} className="text-[#BDBDBD]" />
        )}
      </button>
    </div>
  );
}
