
import Link from "next/link"
import { usePathname } from "next/navigation"



const link = [
  {
    name: 'Accueil',
    path: '/',
  },

  {
    name: 'a-propos',
    path: '/about',
  },

  {
    name: "projets",
    path: "/project",
  },

  {
    name: 'compétences',
    path: '/skill',
  },

  {
    name: 'services',
    path: '/service',
  },

]

const Nav = () => {
  

  const pathname = usePathname()
  return (
    <nav className="flex gap-6 ">
      {link.map((link, index)=>{
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname
             && "  border-b-2 text-cyan-500 border-cyan-500 "
        } capitalize hover:text-cyan-500`}
          >
            {link.name}
          </Link>
        );
      })}

      
    </nav>
  )
}

export default Nav