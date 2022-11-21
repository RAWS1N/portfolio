import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import {SkillData} from "./SkillData";
function Skills() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen relative flex flex-col text-center md:text-left items-center justify-center md:p-10 xl:flex-row min-h-screen"
    >
      <h3 className="absolute top-10 tracking-[12px] text-gray-500 uppercase text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 text-sm tracking-[12px] text-gray-500 uppercase ">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-3  grid-flow-row  gap-4 ">
        {SkillData.map((skill, idx) => {
          return <Skill key={idx}
            {...skill}
          />;
})}
      </div>
    </motion.div>
  );
}

export default Skills;
