import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {CiMenuFries} from 'react-icons/ci'

import Link from "next/link"
import { usePathname } from "next/navigation"


const link = [
  {
    name: 'accueil',
    path: '/home',
  },

  {
    name: 'a-propos',
    path: "/about"
  },

  {
    name: 'projets',
    path: '/project',
  },

  {
    name: 'compétenteces',
    path: '/skill',
  },

  {
    name: 'services',
    path: '/service',
  },

  {
    name: 'contactez-me',
    path: '/contact',
  },
  
];


const MobileNav = () => {

  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-2xl "/>
      </SheetTrigger>
      <SheetContent className=" flex flex-col">

        <div className="mt-35 mb-15 text-xl text-center">
          <Link href="/">
          <h1 className=' font-extrabold font-serif text-2xl sm:text-3xl'>Mor<span className=' text-cyan-500 font-extrabold'>iac</span> </h1>
        </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-4 " > 
          {link.map((link, index)=>{
            return<Link href={link.path} key={index} className={`${
              link.path === pathname && "border-cyan-500 border-b-2 text-cyan-500"} capitalize text-lg hover:text-cyan-500 transition-all`}>{link.name}</Link>
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav