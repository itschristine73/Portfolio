const About = () => (
    <section
      id="about"
      className="relative pt-16 min-h-screen flex flex-col lg:flex-row items-center lg:items-start gap-10 
      px-4 sm:px-6 before:content-[''] before:absolute before:top-0 before:left-4 
      before:w-[98%] before:h-[2px] before:bg-red-300 before:blur-md before:rounded-full lg:scroll-item pulse-border"
    >
      {/* Left - Bio */}
      <div className="lg:w-2/3 w-full text-left pt-8 lg:pt-20">
        <h3 className="text-2xl sm:text-3xl text-center lg:text-left font-semibold mb-6">About Me</h3>
        <p className="text-base sm:text-lg leading-relaxed text-white text-left p-2 sm:p-4">
          I'm a passionate software developer with a background in Python, JavaScript, HTML, and CSS.
          Beyond code, I find expression through music and art—singing, playing instruments, and creating recipes in the kitchen.
          I enjoy winding down with mobile games and thrive in a dark aesthetic environment with hints of Studio Ghibli’s whimsy.
          <br /><br />
          I've built systems like a Library Management App and an AI-driven project that correlates documents and enhances information retrieval.
          I value storytelling in both design and code, and I'm always exploring how human-centered experiences can guide my projects.
        </p>
      </div>
  
      {/* Right - Stats */}
      <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-6 text-white">
        <div className="bg-[#1a0000]/70 p-5 rounded-lg w-full shadow-lg border-l-4 border-red-400">
          <h4 className="text-lg sm:text-xl font-bold mb-1">Projects Completed</h4>
          <p className="text-2xl font-extrabold">3</p>
        </div>
  
        <div className="bg-[#1a0000]/70 p-5 rounded-lg w-full shadow-lg border-l-4 border-red-400">
          <h4 className="text-lg sm:text-xl font-bold mb-1">Most Used Skill</h4>
          <p className="text-lg sm:text-xl font-semibold">JavaScript (React / Node)</p>
        </div>
  
        <div className="bg-[#1a0000]/70 p-5 rounded-lg w-full shadow-lg border-l-4 border-red-400">
          <h4 className="text-lg sm:text-xl font-bold mb-1">Area of Focus</h4>
          <p className="text-lg sm:text-xl font-semibold">Full-Stack Web & AI Interfaces</p>
        </div>
      </div>
    </section>
  );
  
  export default About;
  