import React from "react";
import { button } from "framer-motion/client";
import { motion } from "framer-motion";
const Projects = () => {
  const project = [
    {
      image: "img1.jpg",
      title: "AV Music Player",
      description:
        "A responsive full-stack web application for booking, staff management, and order tracking using Java, JSP, Servlets, Hibernate, and MySQL.",
      skills: "html,CSS,js,java,Servlet,jdbc,Hibernate,sql",
      link: "https://amar0th05.github.io/AVMusic/",
    },
    {
      image: "img2.png",
      title: "Hotel Management System",
      description:
        "A responsive full-stack web application for booking, staff management, and order tracking using Java, JSP, Servlets, Hibernate, and MySQL.",
      skills: "html,CSS,js,java,Servlet,jdbc,Hibernate,sql",
      link: "https://amar0th05.github.io/AVMusic/",
    },
    {
      image: "img3.png",
      title: "Ract Chat X",
      description:
        " A fully responsive real-time chat application with authentication, group chats, and a favorite feature using React and Firebase.",
      skills: "html,CSS,Bootstrap,React,Firebase",
      link: "https://react-chat-x.vercel.app/",
    },
    {
      image: "img4.png",
      title: "Styled Conferences",
      description:
        "A fully responsive React-based system for managing styled conferences, including registration and status tracking",
      skills: "html,CSS,js,React",
      link: "https://styledconferences.vercel.app/",
    },
    {
      image: "img5.png",
      title: "To Do List",
      description:
        "A responsive task management app with add, delete, and update features using React.",
      skills: "html,CSS,js,React",
      link: "https://todo-lists-eight.vercel.app/",
    },
    {
      image: "img6.png",
      title: "Weather Application",
      description:
        "A responsive web application that fetches real-time weather data using a weather API and displays temperature, humidity, and forecasts.",
      skills: "html,CSS,js,React",
      link: "https://amar0th05.github.io/Weather-Application/",
    },
  ];
  return (
    <div
      id="projects"
      className="flex flex-col items-center  gap-5 w-full min-h-screen px-10 md:px-5"
    >
      <h1 className="text-white text-4xl">Projects</h1>
      <div>
        {project.map((data) => {
          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-15 justify-items-center w-full mb-8 md:mb-10"
            >
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={`/assets/${data.image}`}
                  alt="no image"
                  className="h-80 w-120 md:h-65 md:w-96 object-fill rounded-4xl md:rounded-4xl"
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col w-full md:px-0 px-1 items-center md:items-start md:justify-start gap-6"
              >
                <h1 className="text-white md:text-3xl text-2xl text-center">
                  {data.title}
                </h1>
                <h3 className="text-white text-sm  md:text-lg md:tracking-wider">
                  {data.description}
                </h3>
                <div className="text-white flex w-full flex-wrap gap-2 ">
                  {data.skills.split(",").map((data) => {
                    return (
                      <button className="border border-blue-500 py-1 px-2">
                        {data}
                      </button>
                    );
                  })}
                </div>
                <a href={data.link}>
                  <button className="borde text-white bg-gradient-to-r from-blue-500 to-pink-500 px-2 hover:border border-blue-500">
                    View Project
                  </button>
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
