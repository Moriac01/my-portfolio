"use client";

import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaPaintBrush,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import Link from "next/link";


const Services = () => {
  const services = [
    {
      titre: "Développement Web",
      description:
        "Création de sites web modernes, performants et responsives avec React, Next.js et TailwindCSS.",
      icon: <FaLaptopCode/>,
      link: "/projects",
    },
    {
      titre: "Application Mobiles",
      description:"Conception d'application modernes multiplateformes avec React Native et Expo.",
      icon: <FaMobileAlt/>,
      link: "/contact",
    },
    {
      titre: "Base de Données",
      description:
        "Gestion et intégration de bases de données SQL & NoSQL (MYSQL, PostgrSQL, MongoDB).",
      icon: <FaDatabase/>,
      link: "/contact",
    },
    {
      titre: "UI/UX Design",
      description:
        "Maquettage et Design d'interfaces utilisateur intuitives et attrayantes.",
      icon: <FaPaintBrush/>,
      link: "/projects",
    },
  ];

  return (
    <section className="container py-30 text-cyan-500 pb-8 lg:pb-0.5">
      <div className="max-w-3xl mx-auto px-10 text-center mb-2">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl text-white font-bold mb-12"
        >
          Mes Services
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:m-8  " >
          {services.map((service, index)=>(
            <motion.div 
            key={index}
            initial={{opacity:0, y:40}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.6, delay: index*0.2 }}
            viewport={{once:true}}
            className="bg-gray-800 m-0 pr-2 pl-2 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center"
            >
              <div className="mb-4 text-6xl mt-6">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.titre}</h3>
              <p className="text-gray-300 text-base w-full  leading-4 tracking-wide text-[14px] mb-4 mt-2">{service.description}</p>

              <Link href={service.link}>
              <Button className="mb-6">En savoir plus</Button>
              </Link>
            </motion.div>
          ))}
      
        </div>
      </div>
    </section>
  );
}


export default Services;
