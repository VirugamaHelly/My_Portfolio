import React from "react";
import whitegif from "./imags/whitegif.gif";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={whitegif}
            alt="About gif"
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              {/* I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies. */}
              Hello! My name is Helly and I like to build websites/application that serves the world and always want to enhance my knowledge & adpot new technologies that make impact on people. My interest in web development
            </p>

            <div className="main_1 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <i className="fab fa-html5 text-5xl" style={{ color: "#ff5b00" }}></i>
                <h4 className="mt-2 text-base font-bold">HTML</h4>
              </div>
              <div className="flex flex-col items-center">
                <i className="fab fa-css3-alt text-5xl" style={{ color: "#1187da" }}></i>
                <h4 className="mt-2 text-base font-bold">CSS</h4>
              </div>
              <div className="flex flex-col items-center">
                <i className="fab fa-js-square text-5xl" style={{ color: "#ffd600" }}></i>
                <h4 className="mt-2 text-base font-bold">JavaScript</h4>
              </div>
              <div className="flex flex-col items-center">
                <i className="fab fa-react text-5xl" style={{ color: "#55cbf2" }}></i>
                <h4 className="mt-2 text-base font-bold">React.js</h4>
              </div>
              <div className="flex flex-col items-center">
                <i className="fab fa-node-js text-5xl" style={{ color: "green" }}></i>
                <h4 className="mt-2 text-base font-bold">Node.js</h4>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-leaf text-5xl" style={{ color: "green" }}></i>
                <h4 className="mt-2 text-base font-bold">MongoDB</h4>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-4xl font-bold">EX</h3>
                <h4 className="mt-2 text-base font-bold">Express</h4>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
