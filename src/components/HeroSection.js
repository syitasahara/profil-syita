import React from "react";

const HeroSection = () => {
  return (
    <section className="font-poppins bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-r from-[#E0EAFE] to-[#F9E5FF]">
          {/* Text Content */}
          <div className="lg:w-1/2 w-[656px] h-[523px] pt-[48px] pl-[64px]">
            <div className="text-lg text-gray-600 mb-4 font-medium w-[84px] h-[20px]">
              Hello, I'm
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight py-10">
              Creative Designer & Frontend Developer
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Passionate in creating beautiful and functional digital
              experiences. I love blending creativity with technology to make
              impactful solutions for users and brands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="text-white px-8 py-3 rounded-lg bg-gradient-to-r from-[#7755FF] to-[#FF54B0] transition duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
                See My Work
              </button>
              <button className="border-2 border-[#7755FF] text-[#7755FF] px-8 py-3 rounded-lg hover:bg-[#7755FF] hover:text-white transition duration-300 font-medium text-lg">
                Contact Me
              </button>
            </div>

            {/* Instagram Icon */}
            <div className="mt-8">
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
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-white text-lg font-medium">
                Profile Image
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
