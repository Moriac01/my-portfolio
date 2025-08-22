import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaFacebookF} from "react-icons/fa"

const socials = [
    {
        icon: <FaGithub/>, path: ''
    },
    {
        icon: <FaLinkedinIn/>, path: ''
    },
    {
        icon: <FaFacebookF/>, path: ''
    },
]

const Social = () => {
  return (
    <div className="flex gap-2">
        {socials.map((item, index)=>{
            return <Link href={item.path} key={index} className="flex w-9 h-9 border border-cyan-500 rounded-full items-center text-center text-base justify-center hover:bg-cyan-500 duration-500 hover:text-primary ">
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social;