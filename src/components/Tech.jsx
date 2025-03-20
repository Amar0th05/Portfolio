import React from 'react'
import { motion } from 'framer-motion';
import { FaHtml5,FaCss3Alt, FaBootstrap, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiSpring, SiMysql, SiHibernate, SiPostgresql } from "react-icons/si";

const Tech = () => {
  const icons = [
    { Icon: FaHtml5, color: "text-red-500" },
    { Icon: FaCss3Alt, color: "text-blue-500" },
    { Icon: FaBootstrap, color: "text-purple-600" },
    { Icon: SiTailwindcss, color: "text-cyan-500" },
    { Icon: FaReact, color: "text-sky-500 " },
    { Icon: SiSpring, color: "text-green-500" },
    { Icon: FaJava, color: "text-orange-600" },
    { Icon: SiMysql, color: "text-blue-500" },
    { Icon: SiHibernate, color: "text-yellow-600" },
    { Icon: SiPostgresql, color: "text-blue-500" },
  ];
  return (
    <>
    <div id='tech' className='flex flex-col items-center justify-center gap-5 w-full min-h-screen mb-20 md:mb-0  px-10 md:px-5'>
    <h1 className='text-white text-4xl' >Skills</h1>
    
    <motion.div
      className="grid grid-cols-2 md:grid-cols-5 gap-8  justify-items-center w-full p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      {icons.map(({ Icon, color }, index) => (
        <motion.div
          key={index}
          className={`w-[150px] h-[150px] ${color}`}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: [0, -20, 0], opacity: 1 ,animationDuration:0.5}}
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeatType: "mirror",
            delay: index * 0.2, // Smooth staggered effect
          }}
        >
          <Icon className="w-full h-full" />
        </motion.div>
      ))}
    </motion.div>
    </div>
    </>
  )
}

export default Tech