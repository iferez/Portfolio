import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare, BsBrush } from "react-icons/bs";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Nav() {
  return (
    <nav className="fixed bottom-0 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="md:container md:mx-auto">
        <motion.div
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView={"show"}
          className="w-full bg-zinc-800 sm:bg-white/10 h-[60px] xl:h-[80px] sm:backdrop-blur-2x1 sm:rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/60"
        >
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[36px] h-[36px] xl:w-[50px] xl:h-[50px] flex items-center justify-center"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[36px] h-[36px] xl:w-[50px] xl:h-[50px] flex items-center justify-center"
          >
            <BiUser />
          </Link>
          <Link
            to="services"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[36px] h-[36px] xl:w-[50px] xl:h-[50px] flex items-center justify-center"
          >
            <BsBrush />
          </Link>
          {/* <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[36px] h-[36px] xl:w-[50px] xl:h-[50px] flex items-center justify-center"
          >
            <BsBriefcase />
          </Link> */}
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[36px] h-[36px] xl:w-[50px] xl:h-[50px] flex items-center justify-center"
          >
            <BsChatSquare />
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}

export default Nav;
