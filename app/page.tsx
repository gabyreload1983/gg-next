import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-rows-[auto_1fr]">
      <div className="flex justify-center mt-10">
        <Link
          href="projects"
          className="bg-pink-800 py-3 px-10 rounded-md text-center hover:bg-pink-700 hover:text-black"
        >
          MY PROJECTS
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-black">Gabriel Godoy</h1>
        <h2 className="text-3xl">SYSTEMS ANALYST</h2>
        <h3 className="text-xl">WEB DEVELOPMENT</h3>
      </div>
    </main>
  );
}
