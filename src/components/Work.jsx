import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import "swiper/css";
import "swiper/css/pagination";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";

const data = [
  {
    id: 1,
    name: "PORTFOLIO JS",
    link: "https://iferez.github.io/",
    image: p1,
  },
  {
    id: 2,
    name: "PORTFOLIO TS",
    link: "https://iferez.netlify.app/",
    image: p7,
  },
  {
    id: 3,
    name: "AUTOGESTION",
    link: "https://iferezautogestion.netlify.app/",
    image: p2,
  },
  {
    id: 4,
    name: "CODESARROLLO",
    link: "https://codesarrolloiferez.netlify.app/",
    image: p4,
  },
  {
    id: 5,
    name: "SISCO",
    link: "https://siscoiferez.netlify.app/",
    image: p5,
  },
  {
    id: 6,
    name: "FATURI",
    link: "https://faturi.netlify.app/",
    image: p6,
  },
  {
    id: 7,
    name: "VECINO COSTERO",
    link: "https://lacostainterfaces.netlify.app/home.html",
    image: p3,
  },
];

function Work() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(data);
  }, [data]);

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-[2rem] md:text-[3rem] xl:text-[5rem] font-secondary font-semibold uppercase text-center mt-20 md:mt-0 mb-6 md:mb-10 xl:mb-20"
        >
          Proyectos
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {proyectos.map((proyecto) => (
              <SwiperSlide key={proyecto.id} className="">
                <h5 className="text-center">{proyecto.name}</h5>
                <a href={proyecto.link} target="_blank">
                  <img
                    src={proyecto.image}
                    className="w-100"
                    alt={proyecto.name}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;
