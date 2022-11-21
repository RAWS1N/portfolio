import React from "react";
import { motion } from "framer-motion";


function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between p-4 z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
       
      >
        <h1 className="tracking-[4px] text-2xl">
         RAWS1N
        </h1>
      </motion.div>
      <motion.div initial={{
        scale:0.5,
        opacity:0,
        x:500
      }}
      animate={{
        x:0,
        scale:1,
        opacity:1,
      }}
      
      >
        <a href="#contact">
        <button className="border px-4 py-1  rounded-sm shadow-sm bg-white text-black font-medium">
          Contact
        </button>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;
