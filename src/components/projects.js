import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Library Management System",
      description:
        "A full-stack web app to manage book loans, user records, and catalog browsing.",
      details:
        "The Library Management System is a full-stack web application designed to streamline the operations of a \
        library by enabling users to add, view, and delete books, while allowing administrators to manage inventory efficiently. \
        The system supports both individual and bulk deletion of records, integrates secure user authentication,\
         and ensures data consistency and responsiveness across all actions.This system includes user authentication, \
         role-based access, real-time inventory updates, and an intuitive admin dashboard. Built with React, Node.js, Express, and MongoDB.",
      github: "",
    },
    {
      title: "Document Correlation AI",
      description:
        "AI-powered system to link insights across large documents using retrieval models.",
      details:
        "I built a semantic search system that understands natural language queries and retrieves \
        the most relevant text passages using deep learning. Unlike traditional keyword-based search, \
        this project leverages sentence-transformer models (MiniLM) to generate context-aware embeddings \
        that capture the actual meaning behind user queries and document content.",
      github: "",
    },
    {
        title: "Portfolio Website",
        description:
          "A personal portfolio website showcasing my skills, projects, and experience. \
          Designed with a unique grunge aesthetic and interactive elements to highlight my work and expertise in web development.",
        details:
          "This portfolio website serves as a digital representation of my skills and experience as a web developer. Built with a clean, grunge-inspired design, it includes interactive elements such as smooth scroll navigation, hover effects, and a dynamic background that enhances the visual experience. The site features detailed sections about my education, projects, and contact information. It highlights several full-stack development projects, each with a dedicated page showcasing project details, challenges faced, and technical skills utilized. The portfolio is responsive and optimized for a seamless user experience across all devices, providing potential employers or clients with an engaging view of my work.",
        github: "",
      },
  ];

  return (
    <section
      id="projects"
      className="relative pt-16 min-h-screen flex flex-col lg:flex-row items-center lg:items-start gap-10 
      px-4 sm:px-6 before:content-[''] before:absolute before:top-0 before:left-4 
      before:w-[98%] before:h-[2px] before:bg-red-300 before:blur-md before:rounded-full lg:scroll-item pulse-border"
    >
      <h3 className="text-3xl text-center mb-6 font-semibold">Projects</h3>

      <div className="flex flex-wrap gap-8 justify-center md:justify-start">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-zinc-900 bg-opacity-80 border border-zinc-700 rounded-lg p-6 w-full md:w-[45%] lg:w-[30%]
              hover:shadow-lg hover:shadow-red-800 cursor-pointer transition duration-300"
          >
            <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <span className=" hover:underline">Read more →</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-zinc-800 rounded-lg max-w-2xl w-full p-8 relative shadow-xl border border-zinc-600">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-white text-xl hover:text-red-400"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300 mb-6">{selectedProject.details}</p>
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 bg-grungeRed text-white rounded-md hover:bg-red-700 transition disabled-link"
            >
              coming to GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
