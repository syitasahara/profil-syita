import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const socialMedia = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: '#'
    },
    {
      name: 'Dribbble',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.344 7.666c1.388 1.258 2.28 3.048 2.686 5.011-1.267-.177-2.736-.203-4.115-.203-1.136 0-2.235.058-3.293.177.13-.854.39-1.953.812-3.133.52-1.465 1.14-2.85 1.823-4.011 1.42.26 2.876.903 4.087 1.759zM12 2.192c1.482 0 2.913.262 4.237.744-.767 1.282-1.48 2.781-2.049 4.356-1.007.203-2.029.29-3.051.29-1.258 0-2.503-.13-3.712-.39.403-1.669 1.548-3.152 3.099-4.356.65-.42 1.37-.744 2.126-.964.26-.065.52-.13.78-.177.13-.026.262-.026.392-.026h.178zm-4.237.744C6.087 2.454 4.656 3.097 3.445 3.953c.78 1.161 1.784 2.167 2.971 2.971.325-1.388.78-2.752 1.347-3.924zM2.192 12c0-1.482.262-2.913.744-4.237 1.282.767 2.781 1.48 4.356 2.049-.203 1.007-.29 2.029-.29 3.051 0 1.258.13 2.503.39 3.712-1.669-.403-3.152-1.548-4.356-3.099a7.94 7.94 0 01-.964-2.126 8.19 8.19 0 01-.177-.78 8.4 8.4 0 01-.026-.392v-.178zm2.253 6.555c1.258-1.388 3.048-2.28 5.011-2.686-.177 1.267-.203 2.736-.203 4.115 0 1.136.058 2.235.177 3.293-1.465-.52-2.85-1.14-4.011-1.823-1.759-1.42-2.402-2.876-2.974-4.237v-.662zm6.792 4.501c-.854-.13-1.953-.39-3.133-.812-1.465-.52-2.85-1.14-4.011-1.823.26 1.42.903 2.876 1.759 4.087 1.388 1.258 3.178 2.15 5.141 2.556.177-1.267.203-2.736.203-4.115 0-1.258-.058-2.478-.177-3.667v-.236z"/>
        </svg>
      ),
      url: '#'
    }
  ];

  return (
    <section id="contact" className="font-poppins py-20 bg-gradient-to-br from-[#F0E7FF] to-[#F8F4FF]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Me
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-[#7755FF]/5 hover:to-[#FF54B0]/5 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#7755FF] to-[#FF54B0] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">masyitaika9@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-[#7755FF]/5 hover:to-[#FF54B0]/5 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#7755FF] to-[#FF54B0] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">081585616615</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Me</h4>
                  <div className="flex gap-3">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gradient-to-r hover:from-[#7755FF] hover:to-[#FF54B0] hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 text-sm text-center">
                    Feel free to reach out for collaborations, questions, or just to say hello!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Send Message</h3>
              <p className="text-gray-600 mb-6">Let's discuss your project and make something amazing!</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7755FF] focus:border-[#7755FF] transition duration-300 bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7755FF] focus:border-[#7755FF] transition duration-300 bg-gray-50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#7755FF] focus:border-[#7755FF] transition duration-300 bg-gray-50 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7755FF] to-[#FF54B0] text-white py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold text-lg shadow-lg hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;