"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML | CSS | SASS</li>
        <li>C/C++</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Shivajirao Kadam Institute of Technology and Management, Indore</li>
        <li>
          Shanti Bal Mandir High Secondary School, Indore 11th to 12th Grade
        </li>
        <li>Kendriya Vidyalaya CISF, Barwaha</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Introduction to Generative AI</li>
        <li>
          Google Professional Cloud Developer: Troubleshooting Google
          Applications
        </li>
        <li>
          Career Essentials in Software Development by Microsoft and LinkedIn
        </li>
        <li>
          Completion of DigiSaksham Program A joint Digital Skill Inititative by
          Ministry of Labour & Employment and Microsoft on Essentials of Power
          BI coursework
        </li>
        <li>Certificate Of completion Technical Career Counseling session</li>
        <li>Postman API Fundamentals Student Expert</li>
        <li>
          Participation Certificate for Full Stack Web Development Internship
          Program
        </li>
        <li>Certificate of Participation in HackOn With Amazon - Season 3</li>
        <li>Certificate of Participation in Hackblitz</li>
        <li>Certificate of Participation in HackRx 4.0</li>
        <li>Prodigy InfoTech Certificate of Completion</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-full border-8"
          src="/images/rohit.jpg"
          width={500}
          height={500}
          alt="Rohit Bhure"
          loading="lazy"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
