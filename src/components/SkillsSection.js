import React from 'react';

const SkillsSection = () => {
  const skills = [
    {
      category: "UI/UX Design",
      tools: ["Figma", "Adobe XD", "Sketch"]
    },
    {
      category: "Frontend Dev", 
      tools: ["React", "Vue", "Tailwind"]
    },
    {
      category: "Branding",
      tools: ["Logo", "Identity", "Print"]
    },
    {
      category: "Motion Graphic",
      tools: ["After Effects", "Lottie"]
    }
  ];

  return (
    <section id="skills" className="font-poppins py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {skill.category}
              </h3>
              
              <div>
                {skill.tools.map((tool, toolIndex) => (
                  <p key={toolIndex} className="text-gray-600 text-sm mb-2 last:mb-0">
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;