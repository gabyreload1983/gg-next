import Link from "next/link";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../projects";

export default function page() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center py-5">
        <Link
          href="/"
          className="bg-pink-800 py-3 px-10 rounded-md text-center hover:bg-pink-700 hover:text-black"
        >
          GO BACK HOME
        </Link>
      </div>
      <h2 className="text-center py-5 text-2xl">MY PROJECTS</h2>
      <div className="flex flex-col items-center justify-center gap-5 px-3 py-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
