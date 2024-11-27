import Link from "next/link";
import {
  FaCalendarCheck,
  FaDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const socialMedia = {
    linkedin: "https://www.linkedin.com/in/estebangabrielgodoy/",
    github: "https://github.com/gabyreload1983/",
    whatsapp: "https://wa.me/+543476643800",
    instagram: "https://www.instagram.com/estebangabrielgodoy/",
    cv: "/cv/estebangabrielgodoy.pdf",
    celphone: "tel:+5493476643800",
    calendar: "https://calendly.com/gabyreload",
  };

  return (
    <footer className="flex justify-center items-end gap-5 py-3 text-4xl lg:text-4xl">
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
      <Link href={socialMedia.cv} target="_blank" className="relative group">
        <FaDownload className="hover:fill-black" />
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:block group-hover:opacity-100 transition">
          CV
        </span>
      </Link>
      <Link href={socialMedia.celphone} target="_blank">
        <FaPhone className="hover:fill-black" />
      </Link>
      <Link
        href={socialMedia.calendar}
        target="_blank"
        className="relative group"
      >
        <FaCalendarCheck className="hover:fill-black" />
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:block group-hover:opacity-100 transition">
          Calendar
        </span>
      </Link>
    </footer>
  );
}
