"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Digital Project Hub | PHP & MySQL",
    description:
      "Features: Register User, Login User, Post new project and update and delete project listed by that particular user also can upgrade the profile",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rohitbhure65/digitalprojecthub.com",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Stock Price Prediction | Python & ML",
    description:
      "Features: Implemented and compared various machine learning models, including but not limited to LSTM (Long Short-Term Memory) networks, to predict stock prices",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rohitbhure65/stock-price-prediction",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "RentEaseRooms | MERN",
    description:
      "Features: Register User, Login User, Post new property and update and delete property listed by that particular user also can upgrade the profile",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rohitbhure65/renteaserooms.com",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
