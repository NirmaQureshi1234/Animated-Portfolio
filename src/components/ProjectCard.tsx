"use client";
import React from "react";

interface Props {
  title: string;
  text: string;
  image: string;
  link: string;
}

const ProjectCard = ({ title, image, link }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="sm:bg-cover sm:bg-center block w-full sm:w-[100%] md:w-[80%] lg:w-[300px] h-auto rounded-md cursor-pointer overflow-hidden shadow-lg transform transition-transform hover:scale-105 my-4 mx-auto"
    >
      <h1 className="mb7 text-center text-lg font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
        {title}
      </h1>
      <div
        className="relative w-full h-[200px] sm:h-[200px] md:h-[100px] lg:h-[180px] bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity hover:bg-opacity-50 rounded-lg" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <span className="text-blue-200 mt-4">Explore more &gt;</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
