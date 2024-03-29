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

function Services() {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <motion.article
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex"
        >
          <div className="w-1/4 flex flex-col col-card hover:bg-orange-500">
            <FaHtml5 />
            <p className="col-card-text">HTML</p>
          </div>
          <div className="w-1/4 col-card hover:bg-blue-400">
            <FaCss3Alt />
            <p className="col-card-text">CSS</p>
          </div>
          <div className="w-1/4 col-card  hover:bg-violet-600">
            <FaBootstrap />
            <p className="col-card-text">BOOTSTRAP</p>
          </div>
          <div className="w-1/4 col-card hover:bg-white/20">Interface</div>
        </motion.article>

        <motion.article
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex"
        >
          <div className="w-2/4 col-card hover:bg-white/20">Front End</div>
          <div className="w-1/4 col-card hover:bg-blue-500">
            <FaReact />
            <p className="col-card-text">REACT JS</p>
          </div>
          <div className="w-1/4 col-card hover:bg-yellow-500">
            <FaJsSquare />
            <p className="col-card-text">JAVASCRIPT</p>
          </div>
        </motion.article>

        <motion.article
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex"
        >
          <div className="w-1/4 col-card hover:bg-red-600">
            <FaGit />
            <p className="col-card-text">GIT</p>
          </div>
          <div className="w-1/4 col-card hover:bg-cyan-700">
            <FaPhp />
            <p className="col-card-text">PHP</p>
          </div>
          <div className="w-1/4 col-card hover:bg-white/20">Services</div>
          <div className="w-1/4 col-card hover:bg-blue-400">
            <FaDocker />
            <p className="col-card-text">DOCKER</p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default Services;
