"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Social from "@/components/Social";
import { SheetFooter } from "@/components/ui/sheet";
import Link from "next/link";

export default function Home() {
  return (
    <section className=" pt-30  lg:pt-40">
      <div className=" container ">
        <div className="flex flex-col lg:flex-row text-center items-center justify-between gap-6">
          <div className="items-center lg:text-left order-2 lg:order-none ">
            <span className=" text-white/60 font-medium tracking-tighter ">Developpeur Web & Designer</span>
            <h1 className=" lg:text-4xl text-2xl font-extrabold font-serif lg:pt-4 lg:pb-4 ">Salut 🖖, Je suis  <br/> <span className="text-cyan-500">Moriac KPANGAM</span> </h1>
            <p className="leading-5 tracking-tighter lg:tracking-wide font-medium text-xs text-white/80">Passionné par la création d&apos;interfaces modernes et éfficaces. <br /> Depuis 2ans, j&apos;explore le développement web et design pour <br /> transformer mes idées en projets concrets.</p>

            {/* btn & Social */}
            <div className="pt-4 lg:pt-8 items-center flex gap-6 flex-col lg:flex-row">
              <Button
              variant="outline"
              className="uppercase rounded-full  "
              >
                <span>Download CV</span>
                <FiDownload/>
              </Button>

              <div className="">
                <Social/>
              </div>
            </div>
          </div>

          {/*Photo */}
          <div className=" order-1 lg:order-none text-center ">

            <Image
            src="/photo.jpg"
            alt="phooto profil"
            className=" rounded-full  bg-gray-600 text-gray-500 grayscale m-4 hover:animate-pulse duration-500  lg:w-70 lg:h-85"
            width={200}
            height={200}
            priority
            />
          </div>
        </div>
      </div>
      <SheetFooter className="text-[10px] lg:text-xs text-center pt-15 pb-0.5 ">
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

  );
}
