import Image from "next/image";
import Link from "next/link";

type Proyect = {
  id: number;
  title: string;
  imageUrl: string;
  githubUrl: string;
  deployUrl: string;
  description: string;
};

export default function ProjectCard({ project }: { project: Proyect }) {
  return (
    <div className="max-w-5xl flex flex-col md:flex-row gap-2 p-5 bg-gradient-to-r from-slate-500 to-zinc-800">
      <Link href={project.deployUrl} className="w-full flex" target="_blank">
        <Image
          src={project.imageUrl}
          width={361}
          height={271}
          alt=""
          className="m-auto"
        />
      </Link>
      <div className="flex flex-col">
        <h3 className="text-2xl uppercase">{project.title}</h3>
        <p>{project.description}</p>
        <div className="flex justify-end gap-3">
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" className="mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="main-grid-item-icon  hover:stroke-pink-500"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </Link>
          )}
          {project.deployUrl && (
            <Link href={project.deployUrl} target="_blank" className="mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="main-grid-item-icon hover:stroke-pink-500"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" x2="12" y1="8" y2="8" />
                <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
