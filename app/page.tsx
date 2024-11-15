import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-dvh bg-gradient-to-r from-purple-500 to-pink-500 grid grid-rows-3">
      <nav className="flex justify-center items-center">
        <ul className="flex items-center gap-3">
          <Link
            href="/"
            className="bg-transparent border py-3 px-10 w-full rounded-md hover:bg-pink-700 hover:text-black"
          >
            <li className="text-1xl text-center">PROYECTS</li>
          </Link>
          <Link
            href="/"
            className="bg-transparent border py-3 px-10 w-full rounded-md hover:bg-pink-700 hover:text-black"
          >
            <li className="text-1xl text-center">CONTACT</li>
          </Link>
        </ul>
      </nav>
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-black">Gabriel Godoy</h1>
        <h2 className="text-3xl">SYSTEMS ANALYST</h2>
        <h3 className="text-xl">WEB DEVELOPMENT</h3>
      </main>
      <Footer />
    </div>
  );
}
