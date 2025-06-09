import React from "react";
import { Tilt } from 'react-tilt';

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-[0px_35px_60px_-15px_rgba(0,0,0,0.5)]
      "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#151030] rounded-[20px] py-5 px-10 min-h-[180px] flex justify-evenly items-center flex-col  w-full  sm:px-10 md:px-20 lg:px-40 '
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>

<motion.div variants={textVariant()} className="w-full ">
  <p className={styles.sectionSubText}>Introduction</p>
  <h2 className={styles.sectionHeadText}>Overview.</h2>
</motion.div>

<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-[#aaa6c3] text-[16px] leading-[30px] w-full px-4 sm:px-10 md:px-20 lg:px-40 text-justify' 
>
  Hey! I’m Jahnavi — a Computer Science student and a developer who’s genuinely passionate about building clean, interactive, and scalable web experiences. <br></br>I love working with React, Tailwind CSS, HTML, while also diving into the world of AI with Python.
  Right now, I'm focusing on creating dynamic web apps and experimenting with AI-driven tools that can actually make a difference. I’m always excited to learn something new, collaborate on interesting ideas, and turn concepts into reality. Let’s build something awesome together!
  <br /><br></br>
</motion.p>
<div className='mt-20  justify-center'>
<div className='grid sm:grid-cols-3 md:grid-cols-3 gap-10 place-items-center'>

  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
  
</div>
</div>

     
    </>
  );
};

export default SectionWrapper(About, "about");