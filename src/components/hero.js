'use client';

import { useState } from 'react';
import { FaBars, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <section className="relative h-auto min-h-screen flex flex-col-reverse sm:flex-row items-center justify-between px-6 sm:px-16 py-12 sm:py-0 bg-transparent lg:scroll-item gap-8">
      
      {/* Left-side Social Icons */}
      <div className="fixed left-4 top-1/4 flex flex-col items-center space-y-4 z-30 text-white">
        <div className="w-px h-40 bg-gray-500 opacity-50"></div>

        <a href="https://github.com/itschristine73" target="_blank" rel="noopener noreferrer" className="grunge-hover-shadow transition-all duration-300">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/christine73" target="_blank" rel="noopener noreferrer" className="grunge-hover-shadow transition-all duration-300">
          <FaLinkedin size={24} />
        </a>
        <a href="snehabiswakarma@gmail.com" className="grunge-hover-shadow transition-all duration-300">
          <FaEnvelope size={24} />
        </a>

        <div className="w-px h-40 bg-gray-500 opacity-50"></div>
      </div>
      
      {/* Skills (Shown below text on small screens) */}
          <div className="w-full max-w-xl sm:max-w-[16rem] flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-2 mt-8 sm:mt-0">
            {[
              'JavaScript', 'React', 'Next.js', 'Node.js',
              'Express', 'MYSQL', 'Tailwind CSS'
            ].map((skill, index) => (
              <span
                key={index}
                className="text-white text-sm sm:text-base lg:mb-6 lg:ml-6 font-medium px-3 py-1.5 rounded-full 
                          opacity-50 hover:opacity-100 
                          hover:border-red-800 hover:shadow-md hover:shadow-red-600 
                          transition-all duration-300 ease-in-out cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
          
      {/* Right-Side Text */}
      <div className="text-center sm:text-right max-w-full sm:max-w-xl z-20">
        <p className="text-2xl sm:text-4xl mb-4 sm:mb-6 leading-relaxed font-medium text-white">
          <span className="block text-3xl sm:text-xl font-semibold text-grungeRed mb-4 typewriter">
            <Typewriter
              words={["Hi, I'm a Developer & Creator"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
          Combining logic with soul — I build thoughtful software infused with music, artistry, and emotion.
        </p>

        <p className="text-lg sm:text-2xl text-white font-light mb-4 sm:mb-6">
          Passionate about code, music, and magical details. I blend technical expertise with storytelling, breathing life into digital interfaces.
        </p>

        <p className="italic text-base sm:text-lg text-gray-300 pl-4 sm:pl-6">
          “Code is my canvas, melody my muse.”
        </p>
      </div>

      
    </section>
  );
};

export default Hero;
