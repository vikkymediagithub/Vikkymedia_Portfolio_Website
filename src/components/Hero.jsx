import React from 'react';
import HeroPng from '../assets/hero.png';
import { BiDownload } from "react-icons/bi"; // Keeping BiDownload for Download CV
import { FaUserTie } from "react-icons/fa"; // New icon for Hire Me
import { useTypewriter, Cursor } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => { 
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Freelancer.", "Graphics Designer."],
    loop: true,
    typeSpeed: 100, // Increased type speed for smoother transition
    deleteSpeed: 50, 
    delaySpeed: 2000,
  });

  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* Hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h4 className="text-2xl font-bold">WELCOME TO MY WORLD 👋</h4>
              <h1 className="text-5xl font-bold">
                Hi, I'm 
                <span className="text-designColor capitalize"> Victor Joseph</span>
              </h1>
              <h2 className="text-4xl font-bold">
                a <span>{text}</span>
                <Cursor
                  cursorBlinking={true} // Use boolean instead of string
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
              </h2>
              <p data-aos="fade-up" data-aos-delay="300">
                I'm proficient in popular frontend frameworks like ReactJS, which I use to build interactive and scalable web applications. I’m also well-versed in using frontend libraries like Bootstrap, Tailwind CSS, and Material-UI to ensure that the user interface is both aesthetically pleasing and responsive.
              </p>
              <div className="flex gap-6">
                {/* Hire Me button with FaUserTie icon */}
                <a 
                  href="/contact" // Update this link as necessary
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn flex items-center gap-2"
                >
                  <FaUserTie className="text-3xl" />
                  Hire Me
                </a>

               {/* Download CV button with gradient outline */}
                <a
                href="/path-to-cv.pdf" // Replace with the actual CV file link
                data-aos="fade-up"
                data-aos-delay="700"
                className="relative flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-transparent bg-transparent overflow-hidden group"
                download
                >
                {/* Gradient outline effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg group-hover:from-secondary group-hover:to-primary"></span>
                
                {/* The transparent button with gradient outline */}
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r text-white from-primary to-secondary group-hover:text-white transition-all duration-300">
                    <BiDownload className="text-3xl" />
                </span>

                {/* Download CV Text */}
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r text-white from-primary to-secondary group-hover:text-white transition-all duration-300">
                    Download CV
                </span>
                </a>

              </div>
            </div>
            
            {/* Image section */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={HeroPng} alt="Hero Image" className="w-full h-auto max-w-[500px]" />
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
