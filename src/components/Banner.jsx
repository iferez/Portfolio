import React from "react";
import Perfil from "../assets/perfiliferezz.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Banner() {
  return (
    <section className="section-home" id="home">
      <div className="container mx-auto">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-0 text-[3rem] md:text-[6rem] xl:text-[9rem] font-secondary font-semibold uppercase leading-[1] text-center mb-0 z-30 relative drop-shadow-md"
        >
          IVÁN FEREZ
        </motion.h1>
        <motion.h2
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[2rem] md:text-[4rem] xl:text-[7rem] font-secondary font-semibold uppercase leading-[1] text-center z-30 relative drop-shadow-md"
        >
          FRONT END DEVELOPER
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          className=" flex max-w-max items-center mx-auto mb-5 z-20"
        >
          <img src={Perfil} alt="Foto de perfil" className="max-w-[230px] md:max-w-lg" />
        </motion.div>
        <motion.p
          variants={fadeIn("down", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center md:text-[1.2rem] xl:text-[1.6rem] mb-5"
        >
          Desarrollo interfaces que permiten al usuario interactuar con
          productos digitales de manera sencilla
        </motion.p>
      </div>
    </section>
  );
}

export default Banner;
