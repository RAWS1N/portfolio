import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex items-center justify-center"
    >
      {/* <div className=" absolute border  border-transparent rounded-full h-[200px] w-[200px] mt-52" /> */}
      <div className=" absolute border border-red-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      {/* <div className=" absolute border border-[#333333]  rounded-full h-[450px] w-[450px] mt-52" /> */}
      <div className=" absolute border border-cyan-500  rounded-full h-[300px] w-[300px] md:w-[400px] md:h-[400px] mt-52 opacity-20 my-auto animate-pulse" />
      {/* <div className=" absolute border border-[#333333]  rounded-full h-[600px] w-[600px]  mt-52" /> */}
    </motion.div>
  );
}

export default BackgroundCircles;
