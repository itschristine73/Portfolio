const Education = () => (
    <section
      id="education"
      className="relative pt-16 min-h-screen flex flex-col lg:flex-row items-center lg:items-start gap-10 
      px-4 sm:px-6 before:content-[''] before:absolute before:top-0 before:left-4 
      before:w-[98%] before:h-[2px] before:bg-red-300 before:blur-md before:rounded-full lg:scroll-item pulse-border"
    >
      {/* Education Section */}
      <div className="lg:w-1/2 w-full mt-8">
        <h3 className="text-2xl sm:text-3xl text-left text-center mb-6 font-semibold">Education</h3>
        <ul className="space-y-10 sm:space-y-12 text-base sm:text-lg leading-relaxed text-white ml-4 mt-2">
          <li className="relative group pl-4 sm:pl-6">
            <strong className="text-lg sm:text-xl">St. Teresa's Girls Higher Secondary School</strong><br />
            <span className="text-sm text-gray-400">Completed: 2019</span><br />
            Focused on Science and Computing — laid the groundwork for algorithmic thinking and logic building.
            <div className="absolute left-0 top-0 h-full w-[3px] bg-white blur-sm opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
          </li>
          <li className="relative group pl-4 sm:pl-6">
            <strong className="text-lg sm:text-xl">St. Joseph's College</strong><br />
            <span className="text-sm text-gray-400">BSc in Computer Science | 2020–2023</span><br />
            Specialized in software engineering, data structures, and full-stack development. Participated in multiple hackathons and built real-world projects including AI-powered applications.
            <div className="absolute left-0 top-0 h-full w-[3px] bg-white blur-sm opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
          </li>
        </ul>
      </div>
  
      {/* Certifications + CV Download */}
      <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:pl-12">
        <div className="mt-8 flex justify-center lg:justify-start">
          <a
            href="/certificates/SnehaBiswakarmaCV.pdf"
            download="SnehaBiswakarma.pdf"
            className="inline-block px-6 py-3 bg-red-900 text-white font-semibold rounded-md hover:bg-red-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
  
  export default Education;
  
