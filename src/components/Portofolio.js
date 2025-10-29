import React from "react";
import ProfileImage from "../assets/img/project1.png";
import ProfileImage2 from "../assets/img/project2.png";
import ProfileImage3 from "../assets/img/project3.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Disney Clone",
      category: ["React.js", "Vite", "Tailwind"],
      image: ProfileImage,
      description: "Front end Design Project",
    },
    {
      title: "Cyber Edu",
      category: ["React.js", "Vite", "Tailwind"],
      image: ProfileImage2,
      description: "Front end Design Project",
    },
    {
      title: "Perpustakaan Cerita Rakyat",
      category: ["UI Design", "Figma"],
      image: ProfileImage3,
      description: "UI Design Project",
    },
  ];

  return (
    <section id="portfolio" className="font-poppins py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Portfolio
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200"
              >
                <div className="relative overflow-hidden">
                  <div 
                    className="w-full h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 group-hover:text-[#7755FF] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.category.map((cat, catIndex) => (
                      <span
                        key={catIndex}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gradient-to-r hover:from-[#7755FF] hover:to-[#FF54B0] hover:text-white transition-all duration-300"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center mx-auto gap-2">
            Explore More
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;