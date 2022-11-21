import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex bg-no-repeat flex-col relative text-center md:text-left md:flex-row h-screen px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/images/logoLarge.png"
        alt="eagle"
        className="md-10 invert mt-20 md:mt-0 md:mb-0 flex-shrink-0 w-44 h-44 md:w-96 md:h-96 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-4 px-0 md:px-10">
        {/* <h4 className="text-2xl uppercase font-semibold">something about me</h4> */}
        <p className="capitalize text-xl text-bold tracking-[2px] ">
          Hey there,<span className="text-blue-500 font-semibold">This is Dharmi Chand</span>,
          I am an frontend developer who believe in quality over quantity.
          solving real-world problem is my hobby,i like to experiment with UI
          for user-friendly interface. i believe working together is an
          art.
        </p>
        <div className="flex  items-center gap-6 justify-center md:justify-start ">
          <a href="https://github.com/RAWS1N" target="_blank" rel="noreferrer">
            <img height="400" width="400" alt="github" src="/images/github_2.png" className="h-12  w-12 " />
          </a>
          <a href="https://www.linkedin.com/in/dharmi-chand-a90b25257/" rel="noreferrer">
            <img alt="linkedin" height="400" width="400" src="/images/linkedin.png" className="h-12  w-12 " />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
