"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    titre: "Phone",
    description: "(+236) 72 53 78 46",
  },
  {
    icon: <FaEnvelope />,
    titre: "Email",
    description: "moriackpangam@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    titre: "Adresse",
    description: "Bangui, RCA",
  },
];

import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="pt-25 py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[100px]">
          <div className="lg:h-[54%] order-2 lg:order-none">
            {/* Formulaire*/}
            <form className="flex pb-4 flex-col gap-4 p-8 pt-4 bg-[#27272C] rounded-xl ">
              <h3 className=" text-cyan-500 text-2xl ">Travaillons ensemble</h3>
              <p className="text-white/60 text-xs ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate est, asperiores consequuntur iusto quibusdam
                laboriosam ipsam aspernatur modi repellendus quisquam provident
                aliquid hic illo. In sunt soluta nihil libero voluptates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firsname" placeholder="Prenom"/>
                <Input type="lastname" placeholder="Nom"/>
                <Input type="email" placeholder="Adresse email"/>
                <Input type="phone" placeholder="Numéro téléphone"/>
                
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionner votre service"/>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Sélectionner un service</SelectLabel>
                      <SelectItem value="est">Developpement Web</SelectItem>
                      <SelectItem value="cst">UI/UX Designe</SelectItem>
                      <SelectItem value="mst">Logo Designe</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>

              <Textarea className="h-[100px] " placeholder="Entrer votre message ici."/>

              <Button size="sm" className="max-w-35">Envoyer message</Button>
            </form>
          </div>

          {/*Info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index)=>{
                return <li key={index} className="flex items-center  ">
                  <div className="flex gap-6 items-center">
                    <div className="w-[30px] h-[30px] lg:w-[52px] lg:h-[52px] bg-[#27272c] text-cyan-500 rounded-md flex items-center justify-center lg:text-[20px]">{item.icon}</div>
                    <div className="text-sm">
                      <p>{item.titre}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
