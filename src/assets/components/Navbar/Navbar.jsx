import React, { useState } from 'react';
import Logo from '../../images/Logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { delay, motion } from "framer-motion"
import { Link } from 'react-scroll';


const NavMenu = [
  {
    id: 1,
    title: "INTRODUCTION",
    link: "INTRODUCTION",
    delay: 0.2,
  },
  {
    id: 2,
    title: "SKILLS",
    link: "SKILLS",
    delay:0.4,
  },
  {
    id: 3,
    title: "PROJECTS",
    link: "PROJECTS",
    delay:0.6,
  },
];

const container = (delay) => ({
  hidden: {
      opacity: 0,
      x:-100,
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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="BARRA" className="py-8 bg-gray text-white">
      <div className="container flex justify-between items-center">
        <div>
          <motion.img initial={{opacity:0, scale:0}} whileInView ={{ opacity:1, scale:1}} src={Logo} alt="Logo" className="w-[80px]" />
        </div>
        <div>
          <ul className="hidden md:flex justify-center gap-10">
            {NavMenu.map((item) => (
              <motion.li variants={container(item.delay)} initial="hidden" whileInView={"show"} key={item.id}>
                <Link
                  to={item.link}
                  smooth={true}
                  offset={-70}
                  className="hover:text-primary text-xl font-semibold text-white/70 duration-300"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
          <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose className="text-3xl cursor-pointer" />
            ) : (
              <GiHamburgerMenu className="text-3xl cursor-pointer" />
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <ul className="flex flex-col items-center gap-5 py-5">
            {NavMenu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  smooth={true}
                  offset={-70}
                  className="hover:text-primary text-xl font-semibold text-white/70 duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
