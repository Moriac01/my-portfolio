"use client"

import { SheetFooter } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

const profil =[
  {
    fieldName: "Nom",
    fieldValue: "Moriac KPANGAM"
  },
  {
    fieldName: "Téléphone",
    fieldValue: "(+236) 72 53 78 46"
  },
  {
    fieldName: "Expérience",
    fieldValue: "2+ Years"
  },
  {
    fieldName: "Nationalité",
    fieldValue: "Centrafricaine"
  },
  {
    fieldName: "Email",
    fieldValue: "moriackpangam@gmail.com"
  },
  {
    fieldName: "Freelance",
    fieldValue: "Available"
  },
]



const About = () => {
  return (
    <section className=" pt-25">
      <div className="container ">
        <div className="pt-6 flex flex-col lg:flex-row gap-8 lg:gap-55 items-center  ">
        <div className="items-center justify-center text-center">
          <span className="capitalize text-3xl lg:text-5xl">Á propos<span className="text-cyan-500"> de moi...</span></span>
          <p className="leading-5 tracking-tighter pt-4 font-serif text-base text-white/80 text-[12px] lg:text-[15px] w-100">Je suis un jeune développeur Centrafricain qui a commencé <br/> le développement
             il y&apos;a 2ans. J&apos;ai commencé avec HTML et CSS, <br /> puis je me suis orienté vers 
           Tailwind pour créer des interfaces <br /> modernes et responsives. Une pensée bien
           développée est un <br /> projet pour demain.
          </p>
        </div>
        <div>
          <Image
          src="/photo.jpg"
          width={250}
          height={250}
          priority
          alt=""
          className="object lg:w-60 lg:h-60 grayscale-100 rounded-full bg-gray-500"
          />
        </div>
        </div>

        <div className="flex flex-col gap-[30px] pb-4 mb-8 pt-4 mt-8 text-center justify-center items-center border w-full  ">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-25 max-w-[620px]  mx-auto lg:mx-0 ">
            {profil.map((item, index)=>{
            return (
              <li key={index} className="flex items-center justify-center lg:justify-start gap-4">
                <span className="text-white/60 text-sm">{item.fieldName}</span>
                <span className="">{item.fieldValue}</span>
              </li>
            )
          })}
          </ul>
        </div>
        
      </div>
      <SheetFooter className="text-[10px] lg:text-xs text-center pt-4   ">
        <div className="flex justify-between px-6 lg:pt-7 pt-2 lg:px-38 ">
          <div>By moriac Kpangam</div>
          <div>
            <ul className="flex gap-4">
              <li><Link href="mailto:moriackpangam@gmail.com">Email</Link></li>
              <li><Link href="">Github</Link></li>
            </ul>
          </div>
        </div>
      </SheetFooter>
    </section>
  )
}

export default About