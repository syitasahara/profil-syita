import React from "react";
import profileImage from "../assets/img/foto_profil.png";

const HeroSection = () => {
  const socialMedia = [
    {
      name: "Instagram",
      icon: (
        <svg
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_86)">
            <g clipPath="url(#clip1_1_86)">
              <path
                d="M10.5047 6.60937C7.52341 6.60937 5.11873 9.01406 5.11873 11.9953C5.11873 14.9766 7.52341 17.3812 10.5047 17.3812C13.4859 17.3812 15.8906 14.9766 15.8906 11.9953C15.8906 9.01406 13.4859 6.60937 10.5047 6.60937ZM10.5047 15.4969C8.5781 15.4969 7.0031 13.9266 7.0031 11.9953C7.0031 10.0641 8.57341 8.49374 10.5047 8.49374C12.4359 8.49374 14.0062 10.0641 14.0062 11.9953C14.0062 13.9266 12.4312 15.4969 10.5047 15.4969ZM17.3672 6.38906C17.3672 7.08749 16.8047 7.64531 16.1109 7.64531C15.4125 7.64531 14.8547 7.08281 14.8547 6.38906C14.8547 5.69531 15.4172 5.13281 16.1109 5.13281C16.8047 5.13281 17.3672 5.69531 17.3672 6.38906ZM20.9344 7.66406C20.8547 5.98124 20.4703 4.49062 19.2375 3.26249C18.0094 2.03437 16.5187 1.64999 14.8359 1.56562C13.1015 1.46718 7.9031 1.46718 6.16873 1.56562C4.4906 1.64531 2.99998 2.02968 1.76716 3.25781C0.534351 4.48593 0.154663 5.97656 0.0702881 7.65937C-0.0281494 9.39374 -0.0281494 14.5922 0.0702881 16.3266C0.149976 18.0094 0.534351 19.5 1.76716 20.7281C2.99998 21.9562 4.48591 22.3406 6.16873 22.425C7.9031 22.5234 13.1015 22.5234 14.8359 22.425C16.5187 22.3453 18.0094 21.9609 19.2375 20.7281C20.4656 19.5 20.85 18.0094 20.9344 16.3266C21.0328 14.5922 21.0328 9.39843 20.9344 7.66406ZM18.6937 18.1875C18.3281 19.1062 17.6203 19.8141 16.6969 20.1844C15.314 20.7328 12.0328 20.6062 10.5047 20.6062C8.97654 20.6062 5.6906 20.7281 4.31248 20.1844C3.39373 19.8187 2.68591 19.1109 2.3156 18.1875C1.76716 16.8047 1.89373 13.5234 1.89373 11.9953C1.89373 10.4672 1.77185 7.18124 2.3156 5.80312C2.68123 4.88437 3.38904 4.17656 4.31248 3.80624C5.69529 3.25781 8.97654 3.38437 10.5047 3.38437C12.0328 3.38437 15.3187 3.26249 16.6969 3.80624C17.6156 4.17187 18.3234 4.87968 18.6937 5.80312C19.2422 7.18593 19.1156 10.4672 19.1156 11.9953C19.1156 13.5234 19.2422 16.8094 18.6937 18.1875Z"
                fill="#FF54B0"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_86">
              <rect width="21" height="24" fill="white" />
            </clipPath>
            <clipPath id="clip1_1_86">
              <path d="M0 0H21V24H0V0Z" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            fill="#7755FF"
          />
        </svg>
      ),
      url: "#",
    },
    {
      name: "GitHub",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            fill="#7755FF"
          />
        </svg>
      ),
      url: "#",
    },
  ];

  return (
    <section className="font-poppins w-full overflow-hidden">
      <div className="w-full bg-gradient-to-r from-[#E0EAFE] to-[#F9E5FF]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px] lg:min-h-[700px]">
            <div className="lg:w-1/2 w-full px-6 lg:px-12 xl:px-16 py-12 lg:py-0">
              <div className="text-base text-gray-600 mb-3 font-medium">
                Hello, I'm
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-5 leading-tight">
                Front end Developer &{" "}
                <span className="bg-gradient-to-r from-[#7755FF] to-[#FF54B0] bg-clip-text text-transparent">
                  Junior UI/UX Designer
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl">
                Hi! I'm Syita, a 5th-semester Informatics Engineering student
                at Universitas Negeri Surabaya with a passion for front-end web
                development. I love building clean, responsive websites using
                HTML, CSS, Tailwind CSS, JavaScript, React, Vite, Laravel, and
                Blade PHP. My background in administration supports my work with
                strong attention to detail and good time management. I'm
                currently growing my portfolio through real projects and
                continuous learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="text-white px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#7755FF] to-[#FF54B0] transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl hover:scale-105">
                  See My Work
                </button>
                <button className="border-2 border-[#7755FF] text-[#7755FF] px-6 py-2.5 rounded-lg hover:bg-[#7755FF] hover:text-white transition-all duration-300 font-medium text-base hover:scale-105">
                  Contact Me
                </button>
              </div>

              <div className="flex gap-6">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center items-center px-6 lg:px-12 xl:px-16 py-8 lg:py-0">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-[#7755FF] to-[#FF54B0] rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-[95%] h-[95%] object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full opacity-70 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
