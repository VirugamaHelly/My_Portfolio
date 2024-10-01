import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <p className="text-center mb-8">I'm actively looking for any new opportunities in full-stack web development.</p>

        {/* Contact Details */}
        <div className="flex flex-col items-center" style={{ color: "rgb(0, 160, 160)" }}>
          <div className="mb-4 mt-8 text-center text-xl">
            <span className="font-bold">Email:</span>
            <span className="ml-3">hellyvirugama@gmail.com</span>
          </div>
          <div className="mb-4 text-center text-xl">
            <span className="font-bold">Mobile:</span>
            <span className="ml-3">+91-1234567890</span>
          </div>
          <div className="mb-4 text-center text-xl">
            <span className="font-bold">Location:</span>
            <span className="ml-3">A'bad, Gujarat, India</span>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 mt-6">
            <a href="#" target="_blank" className="text-gray-500 hover:text-[rgb(0,160,160)] text-5xl transform transition-all duration-300 hover:animate-move">
              <i className="fas fa-phone-alt"></i>
            </a>
            <a href="#" target="_blank" className="text-gray-500 hover:text-[rgb(0,160,160)] text-5xl transform transition-all duration-300 hover:animate-move">
              <i className="far fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/helly-virugama-a4793a312?originalSubdomain=in" target="_blank" className="text-gray-500 hover:text-[rgb(0,160,160)] text-5xl transform transition-all duration-300 hover:animate-move">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/VirugamaHelly" target="_blank" className="text-gray-500 hover:text-[rgb(0,160,160)] text-5xl transform transition-all duration-300 hover:animate-move">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {/* CSS for the icon animation */}
      <style jsx>{`
        @keyframes move {
          0% { transform: translateX(0); }
          25% { transform: translateX(10px); }
          50% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
          100% { transform: translateX(0); }
        }

        .hover\\:animate-move:hover {
          animation: move 0.4s ease-in-out 2;
        }
      `}</style>
    </div>
  );
};

export default Contact;
