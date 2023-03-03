import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaGit,
  FaDocker,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <motion.h3
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[2rem] md:text-[3rem] xl:text-[5rem] font-semibold uppercase text-center mt-20 md:mt-0 mb-6 md:mb-10 xl:mb-20"
        >
          Contacto
        </motion.h3>

        <article className="grid md:grid-cols-2 gap-4 items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 font-semibold uppercase about-text"
          >
            <h4 className="text-[1.8rem] md:text-[2.5rem] xl:text-[3.5rem] xl:mb-4">
              Formemos parte
            </h4>
            <h4 className="text-[1.8rem] md:text-[2.5rem] xl:text-[3.5rem] mb-6 md:mb-10">
              de un mismo <span>equipo</span>
            </h4>
            <a
              href="mailto: ivanferez.web@gmail.com"
              className="text-[1.2rem] md:text-[1.6rem] xl:text-[2rem] flex items-center content-center text-gradient"
            >
              <GoMail className="mx-2" />
              Conversemos
            </a>
          </motion.div>

          <div className="grid grid-rows-2 grid-flow-col">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="row-span-2"
            >
              <a
                href="https://www.linkedin.com/in/ivanferez/"
                className="row-span-1 col-card hover:bg-blue-400"
              >
                LinkedIn
                <p className="contacto-link">Visitar</p>
              </a>
              <a
                href="https://github.com/iferez"
                className="row-span-1 col-card hover:bg-red-400"
              >
                Github
                <p className="contacto-link">Visitar</p>
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="row-span-2"
            >
              <a
                href="mailto: ivanferez.web@gmail.com"
                className="h-full col-card hover:bg-emerald-500"
              >
                Email
                <p className="contacto-link">Enviar</p>
              </a>
            </motion.div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contact;
