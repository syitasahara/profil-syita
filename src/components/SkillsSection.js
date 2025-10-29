import React from 'react';

const SkillsSection = () => {
  const skills = [
    {
      category: "UI/UX Design",
      tools: ["Figma"],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm4 2v14h10V5H7z"/>
        </svg>
      ),
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      category: "Frontend Dev", 
      tools: ["React", "Vite", "Tailwind", "HTML", "CSS", "JavaScript", "Laravel", "Blade PHP", "GitHub", "Webpack"],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      category: "Administration",
      tools: ["Secretary", "Scheduling"],
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
        </svg>
      ),
      color: "text-green-600", 
      bgColor: "bg-green-100"
    },
  ];

  return (
    <section id="skills" className="font-poppins py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          My Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-[#7755FF] transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center ${skill.color} mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-6 group-hover:text-[#7755FF] transition-colors duration-300">
                {skill.category}
              </h3>
              
              <div className="w-full">
                {skill.tools.length <= 3 ? (
                  <div className="space-y-3">
                    {skill.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex justify-center items-center gap-2 group/item">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#7755FF] to-[#FF54B0] rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-600 font-medium group-hover/item:text-gray-800 transition-colors duration-300">
                          {tool}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {skill.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-2 group/item">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#7755FF] to-[#FF54B0] rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <p className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300 truncate">
                          {tool}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;