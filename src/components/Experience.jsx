import React from "react";

function Experience() {
  return (
    <div
      className="h-screen flex relative justify-evenly items-center
        px-10 md:flex-col mx-auto"
    >
      <h1 className="absolute top-20 tracking-[12px] text-gray-500 text-2xl uppercase">
        Experience
      </h1>
      <div className="flex items-center flex-col space-y-10">
        <img alt="cat" src="/images/sadcat.png" className="h-64 w-64 " />
        <h1 className=" text-xl md:text-left text-center md:text-3xl uppercase text-blue-400">
          There is nothing to share about my experience
        </h1>
      </div>
    </div>
  );
}

export default Experience;
