import React from "react";

function Certification() {
  return (
    <div className="h-screen flex relative flex-col   text-left md:text-center items-center justify-evenly mx-auto z-0">
      <h1 className="absolute tracking-[12px] top-20 text-gray-500 uppercase  text-2xl px-4">
        Certification
      </h1>
      <div className="flex relative w-full  mt-20 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin md:scrollbar-track-gray-400/20 md:scrollbar-thumb-[#5397DB] scrollbar-thumb-rounded-md">
        <div className="flex w-screen flex-col items-center justify-center space-y-5 md:p-20 h-full snap-center flex-shrink-0">
          <img
            alt="algoexpert certificate"
            height="500"
            width="600"
            src="/images/AlgoExpert_Certificate-2.jpg"
            className=" md:h-full h-2/5  block mt-6 w-11/12 md:w-9/12"
          />
          <a target="_blank" href="https://certificate.algoexpert.io/AE-082cbb91ae">
            <p>https://certificate.algoexpert.io/AE-082cbb91ae</p>
          </a>
          <p>1/2</p>
        </div>
        <div className="flex w-screen flex-col items-center justify-center -mt-10 space-y-5 md:p-20 p-0 h-screen snap-center flex-shrink-0">
          <img
            alt="scrimba certificate"
            src="/images/Scrimba-Certificate-2.jpg"
            className="h-10/12 block mt-6 md:h-5/6 w-11/12 md:w-9/12"
          />
           <a target="_blank" href="https://scrimba.com/certificate/ukR2LKs3/gfrontend">
            <p>https://scrimba.com/certificate/ukR2LKs3/gfrontend</p>
          </a>
          <p>2/2</p>
        </div>
      </div>
    </div>
  );
}

export default Certification;
