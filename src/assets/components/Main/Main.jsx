import React from 'react'
import I from "../../images/I.png"
import { FaGithub, FaLinkedin,FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {
        opacity: 0,
        x:100,
    },
    show: {
        opacity: 1,
        x:0,
        transition: {
            duration: 0.4,
            delay: delay,
        },
    },
});


const Main = () => {
return (
    <>
    <main className='bg-primary text-white overflow-hidden'>
        <div id='INTRODUCTION' className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 min-h-[600px] place-items-center py-20 md:py-0'>
            <div className='grid col-span-2 relative h-full justify-center items-center'>
                <div className='w-[280px] sm:w-[400px] md:w-[450px]'>
                    <motion.h1 
                    variants={container(0.2)}
                    initial="hidden"
                    whileInView="show"className='text-4xl md:text-6xl font-bold relative z-20'>
                        Matias Ary Veron</motion.h1>
                    <motion.div
                    variants={container(0.5)}
                    initial="hidden"
                    whileInView= "show"
                    className='h-[6px] w-[80px] bg-primary mt-4'></motion.div>
                    <div className='flex gap-6 mt-24'>
                        <motion.div variants={container(.8)} initial="hidden" whileInView="show">
                            <a 
                            href="https://github.com/matiasaryveron" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub profile">
                                <FaGithub className='text-2xl hover:scale-110 cursor-pointer duration-200' />
                                </a>
                                </motion.div>
                                <motion.div variants={container(1.0)} initial="hidden" whileInView="show">
                                    <a 
                                    href="https://ar.linkedin.com/in/matias-ary-veron" 
                                    target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                                        <FaLinkedin className='text-2xl hover:scale-110 cursor-pointer duration-200' /></a>
                                        </motion.div>
                                        </div>
                                    </div>
                <div className='absolute -right-6 md:-right-32 bottom-0'>
                    <motion.img initial={{x: -100}} whileInView={{x:0}} transition={{duration: 1}} src={I} alt="" className='img-shadow scale-110 relative z-10 w-[150px] sm:2-[250px] md:w-full -right-4' />
                </div>
            </div>
            <div className='space-y-7'>
                <motion.p variants={container(0.4)} initial= "hidden" whileInView={"show"} className='text-sm opacity-50 tracking-widest font-serif translate-y-3'>
                    -Introduction
                </motion.p>
                <motion.h1 variants={container(0.5)} initial="hidden" whileInView={"show"} className='text-2xl lg:text-3xl '>
                Frontend Developer | Based in Argentina 
                </motion.h1>
                <motion.p variants={container(0.6)} initial="hidden" whileInView={"show"} className=' text-sm leading-6 opacity-70'>
                Crafting responsive web experiences from Argentina. Open to global collaborations.
                </motion.p>
                </div>
            </div>
    </div>
</main>
</>
)
}

export default Main