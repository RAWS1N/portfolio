import React from "react";
import "./App.css";
import {Header,ContactMe,About,Experience,Skills,Certification,Projects,Hero} from './components'

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden scrollbar-thin md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#5397DB] scrollbar-thumb-rounded-md">
      <a href="#hero">
        <Header />
      </a>
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="certificates" className="snap snap-center">
        <Certification />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
