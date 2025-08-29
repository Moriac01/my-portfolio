"use client"

import {motion} from "framer-motion"
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt} from "react-icons/fa";
import {SiNextdotjs, SiTailwindcss, SiSqlite} from "react-icons/si";

const Skill = () => {

  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500 text-5xl"/>,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-5xl"/>,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-5xl"/>,
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-5xl"/>,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-gray-800 text-5xl"/>,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-sky-500 text-5xl"/>,
    },
    {
      name: "Sqlite",
      icon: <SiSqlite className="text-blue-700 text-5xl"/>,
    },
    {
      name: "Git/GitHub",
      icon: <FaGitAlt className="text-red-500 text-5xl"/>,
    },
    {
      name: "Bases de Données",
      icon: <FaDatabase className="text-green-600 text-5xl"/>,
    },
  ]

  return (
    <div className="container py-30 min-h-screen  justify-center mx-auto pb-8">
      <motion.h1
      initial={{opacity: 0, y:-40}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration:0.8}}
      viewport={{once:true}}
      className="text-4xl font-bold text-center mb-10">Mes Compétences</motion.h1>

      <div className="grid grid-cols-3 sm:grid-cols-2  md:grid-cols-3 gap-8 pt-8 ">
        {skills.map((skill, index)=>(
          <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity:1, y: 0}}
          transition={{duration: 0.6, delay: index*0}}
          whileHover={{scale: 1.08, rotate: 2}}
          whileTap={{scale: 0.95}}
          key={index}
          className="text-center mx-auto items-center"
          >
            {skill.icon}
            <h2 className="mt-4 text-lg text-cyan-500 font-semibold">{skill.name} </h2>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skill