import React from "react";
import { motion } from "framer-motion";
import {ProjectData} from "./ProjectData";

function Projects() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left md:text-center items-center justify-evenly mx-auto z-0 md:space-y-10"
    >
      <h3 className="absolute top-20 md:top-10  tracking-[18px] uppercase text-2xl text-gray-500">
        Projects
      </h3>
      <div className="relative w-full  mt-0 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#5397DB] scrollbar-thumb-rounded-md">
        {ProjectData.map((project, idx) => (
          <div className=" w-full flex flex-col items-center space-y-5 justify-center p-10 md:p-20 h-screen snap-center flex-shrink-0" key={idx}>
            <motion.img
              initial={{
                opacity: 0,
                y: -300,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={"/images/"+project.photo}
              alt="project"
              className=" h-1/2 w-full md:h-4/5 md:w-9/12"
            />
            <div className="space-y-2 px-0 max-w-6xl">
              <h4 className="text-2xl  text-center font-semibold">
                <span className="underline decoration-[#5397DB]/50">
                  Case Study {idx + 1} of {ProjectData.length}:
                </span>
                &nbsp; {project.title}
              </h4>
              <a href={project.link} target="_blank" rel="noreferrer" className="block pt-2">
              Visit: {project.link}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute w-full top-[30%] bg-[#5397DB]/10 left-0 h-[200px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
