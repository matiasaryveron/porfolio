import React from 'react';
import { FaGithub } from 'react-icons/fa';
import DR from '../../images/DR.png';
import RC from '../../images/RC.png';
import CG from '../../images/CG.png';
import { motion } from "framer-motion"

const projectList = [
    {
        id: 1,
        title: 'Repuestos Cra',
        img: RC,
        githubLink: 'https://github.com/matiasaryveron/cra.git',
        liveLink: 'https://www.repuestoscra.com.ar/',
        delay: 0.2,
    },
    {
        id: 2,
        title: 'Tienda Ecommers',
        img: CG,
        githubLink: 'https://github.com/matiasaryveron/reactJsMatiasAryVeron.git',
        liveLink: 'https://centralgamer.vercel.app/',
        delay: 0.4,
    },
    {
        id: 3,
        title: 'Delivery Repuestos',
        img: DR,
        githubLink: 'https://github.com/matiasaryveron/pagina.git',
        liveLink: 'https://www.deliveryrepuestos.com.ar/',
        delay: 0.6,
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

const Projects = () => {
    return (
        <div className="bg-primary text-white py-10 ">
            <div id="PROJECTS" className="container ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6">
                    <section className="  space-y-7 lg:max-w-[300px]">
                        <motion.p variants={fadeUp(0.2)} initial={"hidden"} whileInView={"show"} className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
                            - Projects
                        </motion.p>
                        <motion.h1 variants={fadeUp(0.4)} initial={"hidden"} whileInView={"show"} className="text-2xl lg:text-3xl">
                            All creative Works, Selected projects
                        </motion.h1>
                        <motion.p variants={fadeUp(0.6)} initial={"hidden"} whileInView={"show"}className="text-sm leading-6 opacity-70">
                        Here are some of my current and functional projects. You'll also find academic projects showcasing a variety of tools and skills I have developed. Each project reflects my growth as a developer and my dedication to delivering high-quality work.
                        </motion.p>
                    </section>
                    {projectList.map((project) => (
                        <motion.div variants={fadeUp(project.delay)} initial={"hidden"} whileInView={"show"} key={project.id} className="space-y-4 px-4 mb-8 text-center">
                            <img src={project.img} alt={project.title} className="w-full rounded-md shadow-md" />
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-2xl font-semibold hover:underline"
                            >
                                {project.title}
                            </a>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-gray-400 hover:text-white"
                            >
                                <FaGithub size={24} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
