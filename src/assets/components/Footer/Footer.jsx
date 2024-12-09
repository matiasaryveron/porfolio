import React from 'react'
import Logo from '../../images/Logo.png'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className='bg-darkGray '>
      <div className='container flex flex-col gap-3 justify-center items-center'>
        <motion.img initial={{scale:0, opacity:0}} whileInView={{scale:1, opacity:1}} transition={{duration: 0.4}} src={Logo} alt="" className='w-[100px]' />
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.4, delay:0.4}} className='text-white text-center text-sm'> © Buenos Aires, Argentina 2024 - veronweb_ok</motion.p>
      </div>
    </div>
  )
}

export default Footer