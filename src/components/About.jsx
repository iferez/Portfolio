import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <article className="flex flex-col gap-y-10 lg:flex-row lg:items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg-about bg-contain bg-no-repeat bg-center md:h-[300px] xl:h-[450px]"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="md:text-[1.5rem] xl:text-[2rem] mb-3">Sobre mí</h2>
            <h3 className="md:text-[1.2rem] xl:text-[1.6rem] mb-5 about-text">
              Tengo 28 años y vivo en Buenos Aires, Argentina. Estudio{" "}
              <span>Desarrollo Web</span> en la Universidad Nacional de La
              Matanza.
              <br /> <br />
              Brindo servicios como <span>Front End Developer</span> en el
              Ministerio de Economía.
              <br /> <br />
              Diseño y desarrollo <span>interfaces</span> web escalables y
              reutilizables. Implemento componentes integrados con servicios,
              poniendo foco en la <span>accesibilidad</span> y los principios de{" "}
              <span>usabilidad</span>. Siempre estoy buscando formas de mejorar
              y optimizar mi código.
            </h3>
          </motion.div>
        </article>
      </div>
    </section>
  );
}

export default About;
