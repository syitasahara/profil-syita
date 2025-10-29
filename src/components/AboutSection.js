import React from "react";
import profileImage from "../assets/img/foto_profil.png";

const AboutSection = () => {
  const skills = [
    "Front end Development",
    "UI/UX Design",
    "Administration"
  ];

  return (
    <section id="about" className="font-poppins py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
          About Me
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={profileImage}
                    alt="Syita - Designer & Developer"
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full opacity-70 animate-pulse delay-1000"></div>
              </div>
            </div>

            <div className="lg:w-3/5 space-y-8">
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Hi! I'm{" "}
                  <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7755FF] to-[#FF54B0]">
                    Syita
                  </span>
                  , a passionate frontend developer and UI/UX Designer based in
                  Surabaya. With a background in visual design and a love for
                  coding, I specialize in building websites and apps that are
                  not only stunning but also user-friendly and responsive.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:border-[#7755FF] transition duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#7755FF] to-[#FF54B0] rounded-full"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white rounded-lg transition duration-300 font-medium text-lg w-full sm:w-[464px] h-[48px] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <g clipPath="url(#clip0_1_105)">
                      <g clipPath="url(#clip1_1_105)">
                        <path
                          d="M15.5657 0.174997C15.8813 0.393747 16.047 0.771872 15.9876 1.15L13.9876 14.15C13.9407 14.4531 13.7563 14.7187 13.4876 14.8687C13.2188 15.0187 12.897 15.0375 12.6126 14.9187L8.87508 13.3656L6.73446 15.6812C6.45633 15.9844 6.01883 16.0844 5.63446 15.9344C5.25008 15.7844 5.00008 15.4125 5.00008 15V12.3875C5.00008 12.2625 5.04696 12.1437 5.13133 12.0531L10.3688 6.3375C10.5501 6.14062 10.5438 5.8375 10.3563 5.65C10.1688 5.4625 9.86571 5.45 9.66883 5.62812L3.31258 11.275L0.553206 9.89375C0.221956 9.72812 0.00945635 9.39687 8.13452e-05 9.02812C-0.00929365 8.65937 0.184456 8.31562 0.503206 8.13125L14.5032 0.131247C14.8376 -0.0593776 15.2501 -0.0406276 15.5657 0.174997Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_105">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_1_105">
                        <path d="M0 0H16V16H0V0Z" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
