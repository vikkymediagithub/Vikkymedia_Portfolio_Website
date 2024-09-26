import { IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import HeroPng from '../assets/hero.png';
import Design from '../assets/Design.png';
// import { BiDownload } from "react-icons/bi";
// import { FaUserTie } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// motion
import { motion } from "framer-motion";
// variants
import {fadeIn} from '../components/variants';


const Hero = () => {
  const social_media = [
    { name: "Instagram", icon: <IoLogoInstagram size="30" color="#fff" /> },
    { name: "Facebook", icon: <IoLogoFacebook size="30" color="#fff" /> },
    { name: "LinkedIn", icon: <IoLogoLinkedin size="30" color="#fff" /> },
    { name: "Twitter", icon: <IoLogoTwitter size="30" color="#fff" /> },
  ];

  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Freelancer.", "Graphics Designer."],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <>
      <section id="home" className="py-12 sm:py-0 dark:bg-dark dark:text-white duration-300 overflow-hidden relative">
        <div className="container min-h-[700px] flex relative z-10">
          {/* Design Image Under Text */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <img src={Design} alt="Design" className="w-full max-w-[800px] opacity-50" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-20">
            {/* Hero Text Section */}
            <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="visible"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            // transition={{ duration: 0.7, ease: [0.6, 0.01, -0.35, 0.9] }}
            
            
            className="order-2 py-20 flex flex-col justify-center itemes-center text-center md:text-left md:items-start sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h4 className="text-2xl xl:text-4xl sm:text-4xl font-bold">WELCOME TO MY WORLD 👋</h4>
              <h1 className="text-5xl font-bold">
                Hi, I am 
                <span className="text-designColor capitalize"> Victor Joseph</span>
              </h1>
              <h2 className="text-4xl font-bold">
                a <span>{text}</span>
                <Cursor cursorBlinking={true} cursorStyle="|" cursorColor="#ff014f" />
              </h2>
              <p className='sm:text-4xl xl:text-3xl'>
                I am proficient in popular frontend frameworks like ReactJS, which I use to build interactive and scalable web applications. I’m also well-versed in using frontend libraries like Bootstrap, Tailwind CSS, and Material-UI to ensure that the user interface is both aesthetically pleasing and responsive.
              </p>

              {/* Buttons Section */}
              <div className='flex'>
                <button className='bg-slate-900 text-white font-bold duration-300 cursor-pointer'>Hire Me</button>
                <button className='bg-slate-700 text-white cursor-pointer '>Download CV</button>
              </div>

              {/* Social Media Icons */}
              <div className="mt-8 text-3xl flex items-center gap-5">
                {social_media?.map(({ name, icon }) => (
                  <div key={name} className="text-gray-600 hover:text-white cursor-pointer">
                    {icon}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            animate="visible"
            whileInView={"show"}
            viewport={{once: false, amount: 0.9}}
            // transition={{ duration: 0.7, ease: [0.6, 0.01, -0.35, 0.9] }}
            
            className="order-1 sm:order-2">
              <img src={HeroPng} alt="Hero Image" className="w-full h-auto max-w-[500px]" />
            </motion.div>
          </div>

          

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
