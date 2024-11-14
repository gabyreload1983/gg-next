import Link from "next/link";
import {
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export default function Home() {
  const socialMedia = {
    linkedin: "https://www.linkedin.com/in/estebangabrielgodoy/",
    github: "https://github.com/gabyreload1983/",
    whatsapp: "https://wa.me/+543476643800",
    instagram: "https://www.instagram.com/estebangabrielgodoy/",
    cv: "https://gabrielgodoy.com.ar/resources/cv/estebangabrielgodoy.pdf",
    celphone: "+5493476643800",
  };
  return (
    <div className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 grid grid-rows-3">
      <nav className="flex justify-center items-center">
        <ul className="flex flex-col items-center gap-3">
          <Link
            href="/"
            className="bg-black py-3 px-10 w-full rounded-md hover:bg-pink-700 hover:text-black"
          >
            <li className="text-1xl text-center">PROYECTS</li>
          </Link>
          <Link
            href="/"
            className="bg-black py-3 px-10 w-full rounded-md hover:bg-pink-700 hover:text-black"
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
      <footer className="flex justify-center items-end gap-5 mb-5 text-2xl lg:text-4xl">
        <Link href={socialMedia.linkedin} target="_blank">
          <FaLinkedin className="hover:fill-black" />
        </Link>
        <Link href={socialMedia.github} target="_blank">
          <FaGithub className="hover:fill-black" />
        </Link>
        <Link href={socialMedia.whatsapp} target="_blank">
          <FaWhatsapp className="hover:fill-black" />
        </Link>
        <Link href={socialMedia.instagram} target="_blank">
          <FaInstagram className="hover:fill-black" />
        </Link>
        <Link href={socialMedia.cv} target="_blank">
          <FaDownload className="hover:fill-black" />
        </Link>
        <Link href={socialMedia.celphone} target="_blank">
          <FaPhone className="hover:fill-black" />
        </Link>
      </footer>
    </div>
  );
}
