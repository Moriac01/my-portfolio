"use client"

import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const page = () => {

  const projets = [
    {
      titre: "Portfolio Personnel",
      description: "Mon porfolio développé avec Next.js, TailwindCSS et Framer Motion.",
      image: "/photo1.png",
      tech: ["Next.js", "Taiwind", "Framer Motion"],
      github: "#",
      demo: "#",
    },
    {
      titre: "App Gestion de Tâches",
      description: "Application pour organiser et suivre les tâches d'une équipe.",
      image: "/vercel.svg",
      tech: ["Next.js", "Taiwind", "Framer Motion", "Node.js"],
      github: "#",
      demo: "#",
    },
    {
      titre: "App Investiture",
      description: "Une application sur l'investiture présidentielle avec un back-office admin",
      image: "/invest_app.png",
      tech: ["Next.js", "Taiwind","SQLite", "React Native", "Prisma", "Framer Motion"],
      github: "#",
      demo: "#",
    },
    {
      titre: "Création app Bac-QR",
      description: "Application mobile pour réviser le bac avec des QR codes.",
      image: "/bac_qr.png",
      tech: ["Next.js", "Taiwind", "React", "Framer Motion"],
      github: "#",
      demo: "#",
    },

  ]

  return (
    <section className="container py-30 text min-h-screen pb-8">
      <div className="text-center maw-w-6xl mx-auto px-6">
        <motion.h2
        initial={{opacity: 0, y: -40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        viewport={{once:true}}
        className="text-4xl text-shadow-white font-bold mb-12"
        >
          Mes projets
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projets.map((projet,index)=>(
            <motion.div
            key={index}
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.6, delay: index*0.1}}
            viewport={{once: true}}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 flex flex-col pt-8  "
            >
              <Image
              src={projet.image}
              alt={projet.titre}
              width={6000}
              height={400}
              className="object-contain w-full h-48 mx-auto"
              />

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-2xl text-cyan-500 font-semibold mb-2">{projet.titre} </h3>
                <p className="text-gray-300 text-sm ">{projet.description} </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center  mb-4">
                {projet.tech.map((t, i)=>(
                  <span
                  key={i}
                  className="bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4 mb-4">
                <Link
                href={projet.github}
                target= "_blank"
                className="flex items-center gap-2 text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full text-sm"
                >
                  <FaGithub/> Code
                </Link>

                <Link
                href={projet.demo}
                target= "_blank"
                className="flex items-center gap-2 bg-cyan-500 text-white hover:bg-cyan-600 px-4 py-2 rounded-full text-sm"
                >
                  <FaExternalLinkAlt/> Voir
                </Link>
              </div>
                

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default page