import React from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import {MdComputer} from 'react-icons/md'
import skils from '../../images/skils.png'
import { motion } from "framer-motion"

const skills =[
    {
        id: 1,
        title: "Frontend Developer",
        icon: <MdComputer className='text-4xl'/>,
        delay: 0.6,
    },
    {
        id: 2,
        title: "Community Manager",
        icon: <FaPeopleGroup className='text-4xl'/>,
        delay: 0.2,
    },
    {
        id: 3,
        title: "Sales Expertise",
        icon: <MdBusinessCenter className='text-4xl'/>,
        delay: 0.4,
    },
];

const fadeUp = (delay) => ({
    hidden: {
        opacity: 0,
        y:50,
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

const Skills = () => {
return (
    <div className='bg-gray'>
        <div id='SKILLS' className='container py-10 text-white spacy-y-14'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center'>
                {skills.map((skill) =>{
                    return (
                        <motion.div key={skill.id} variants={fadeUp(skill.delay)} initial="hidden" whileInView="show" className='flex item-center gap-6 bg-white/15 px-7 py-12  max-w-[300px]'>
                        {skill.icon}
                        <div className='space-y-3'>
                            <p className='text-3xl'>{skill.title}</p>
                            <p>{skill.description}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity: 1}} transition={{duration: 0.7, delay:0.5}}>
            <img src={skils} alt="" />
        </motion.div>
    </div>
)
}

export default Skills