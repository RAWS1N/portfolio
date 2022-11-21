import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

function Hero() {
  const [text] = useTypewriter({
    words: ["<Person who love python/>", "<but javascript is my true love/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col text-center my-auto overflow-hidden space-y-0 items-center h-screen justify-center">
      <BackgroundCircles />
      <img
        src="/images/eagle720.png"
        className="relative mx-auto  h-32 w-32 "
        alt="eagle"
        width="500"
        height="500"
      />
      <div className="pt-12 z-20">
        <p className="text-xs uppercase tracking-[8px] ">frontend developer</p>
        <h1 className="my-4 text-3xl font-semibold px-10">
          <span className=" uppercase">{text}</span>
          <Cursor cursorColor="cyan" />
        </h1>
        <div className="flex flex-col items-center justify-center  sm:flex-row">
          <a href="#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
          <a href="#certificates">
            <button className="heroButton">Certificate(s)</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
