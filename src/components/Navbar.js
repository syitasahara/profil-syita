import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm h-[88px] sticky top-0 z-50 flex items-center">
      <div className="w-[1440px] mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-[20px] font-bold text-gray-800">MyProfile</div>

          {/* Menu Desktop */}
          <div className="text-[16px] font-semibold hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-violet-500 transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-violet-500 transition"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="text-gray-600 hover:text-violet-500 transition"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-violet-500 transition"
            >
              Contact
            </a>
          </div>

          {/* Tombol Hire Me Desktop */}
          <div className="hidden md:block">
            <button className="text-[16px] font-semibold bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white px-4 py-2 rounded-lg hover:opacity-95 transition inline-flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M15.5657 0.174997C15.8813 0.393747 16.047 0.771872 15.9876 1.15L13.9876 14.15C13.9407 14.4531 13.7563 14.7187 13.4876 14.8687C13.2188 15.0187 12.897 15.0375 12.6126 14.9187L8.87508 13.3656L6.73446 15.6812C6.45633 15.9844 6.01883 16.0844 5.63446 15.9344C5.25008 15.7844 5.00008 15.4125 5.00008 15V12.3875C5.00008 12.2625 5.04696 12.1437 5.13133 12.0531L10.3688 6.3375C10.5501 6.14062 10.5438 5.8375 10.3563 5.65C10.1688 5.4625 9.86571 5.45 9.66883 5.62812L3.31258 11.275L0.553206 9.89375C0.221956 9.72812 0.00945635 9.39687 8.13452e-05 9.02812C-0.00929365 8.65937 0.184456 8.31562 0.503206 8.13125L14.5032 0.131247C14.8376 -0.0593776 15.2501 -0.0406276 15.5657 0.174997Z"
                  fill="currentColor"
                />
              </svg>
              Hire Me
            </button>
          </div>

          {/* Hamburger Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a
              href="#about"
              className="block text-gray-600 hover:text-violet-500 transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="block text-gray-600 hover:text-violet-500 transition"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="block text-gray-600 hover:text-violet-500 transition"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-violet-500 transition"
            >
              Contact
            </a>
            <button className="bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white px-4 py-2 rounded-lg hover:opacity-95 transition w-full inline-flex items-center justify-center">
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M15.5657 0.174997C15.8813 0.393747 16.047 0.771872 15.9876 1.15L13.9876 14.15C13.9407 14.4531 13.7563 14.7187 13.4876 14.8687C13.2188 15.0187 12.897 15.0375 12.6126 14.9187L8.87508 13.3656L6.73446 15.6812C6.45633 15.9844 6.01883 16.0844 5.63446 15.9344C5.25008 15.7844 5.00008 15.4125 5.00008 15V12.3875C5.00008 12.2625 5.04696 12.1437 5.13133 12.0531L10.3688 6.3375C10.5501 6.14062 10.5438 5.8375 10.3563 5.65C10.1688 5.4625 9.86571 5.45 9.66883 5.62812L3.31258 11.275L0.553206 9.89375C0.221956 9.72812 0.00945635 9.39687 8.13452e-05 9.02812C-0.00929365 8.65937 0.184456 8.31562 0.503206 8.13125L14.5032 0.131247C14.8376 -0.0593776 15.2501 -0.0406276 15.5657 0.174997Z"
                  fill="currentColor"
                />
              </svg>
              Hire Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
