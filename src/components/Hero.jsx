import React from "react";
import img from "/assets/myblackimg.png";
import { motion } from "framer-motion";
import resume from "/assets/Amarnath Resume.pdf";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="flex min-h-screen w-full justify-center items-center py-15 md:px-5"
      >
        <div className="flex flex-col-reverse gap-10 mt-15 items-center  px-10 md:flex-row md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="flex flex-col min-w-[50%] items-center text-center pt-10"
          >
            <h1 className="text-white text-4xl tracking-[8px] md:text-6xl font-bold mb-2">
              Amarnath T
            </h1>
            <h3 className="  text-xl md:text-2xl mb-5 bg-gradient-to-r from-blue-500 via-green-400 to-red-500 bg-clip-text text-transparent">
              Full Stack Developer
            </h3>
            <p className="text-white max-w-2xl text-lg md:text-xl font-light leading-8 md:leading-10 text-start">
              I am a passionate full-stack developer skilled in building
              efficient and scalable web applications. With expertise in
              front-end technologies like React, Tailwind CSS, and Bootstrap, as
              well as back-end technologies like Java, Servlet, JDBC, Hibernate,
              and SQL, I strive to develop innovative solutions that enhance
              business performance and provide seamless user experiences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="h-[350px] w-[350px] text-center mb-3"
          >
            <img
              src={img}
              alt="Profile"
              className="w-full h-full rounded-full object-fill md:rounded-4xl hover:border border-blue-500"
            />
            <button className="text-center border border-amber-50 px-10 py-2 mt-4 text-amber-50 hover:text-blue-500 rounded-2xl hover:border-blue-500">
              <a href="/assets/Amarnath Resume.pdf" download={resume}>
                Resume
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
