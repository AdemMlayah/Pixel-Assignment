import React, { useState } from "react";

export default function DoneBtn() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
  };

  return (
    <div className="w-[370px] h-[60px] flex justify-center items-center">
      <button
        onClick={handleClick}
        className={`w-[340px] h-[40px] rounded-md bg-[#FFCE22] transition-transform duration-200 ease-out hover:bg-[#FFD84D] ${
          clicked ? "transform -translate-y-[0.5px] bg-[#FFD84D]" : ""
        }`}
      >
        Done
      </button>
    </div>
  );
}
