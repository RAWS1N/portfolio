import { motion } from "framer-motion";
import React from "react";

function Skill({ directionLeft, image, name, style, prof }) {
  return (
    <div className="group top-24 md:top-14 relative flex cursor-pointer">
      <div className="flex flex-col items-center justify-center">
        <motion.img
          src={`/images/${image}`}
          alt={name}
          height="400"
          width="400"
          initial={{
            // x: directionLeft === true ? -200 : 200,
            x: 0,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`border w-20 h-20  object-cover  border-gray-500 rounded-full  filter group-hover:grayscale duration-300 ease-in-out p-1 ${style}`}
        />
        <p className="uppercase mt-1">{name}</p>
      </div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition ease-in-out group-hover:bg-white duration-300 w-20 h-20  rounded-full z-0 ">
        <div className="flex items-center h-full justify-center">
          <p className="text-2xl text-black text-semibold">{prof}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
