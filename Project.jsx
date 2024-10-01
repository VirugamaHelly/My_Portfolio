import React from "react";

const projectsData = [
  {
    id: 1,
    name: "Spinner Game",
    technologies: "HTML, CSS, JavaScript",
    image: "/Portfolioimgs/Speenerimg.jpg",
    github: "https://github.com/VirugamaHelly/SpinnerWheel-Game",
    liveLink: 'https://66f3a3c405cf09c283d03c2d--beamish-meringue-adbccf.netlify.app',
  },
  {
    id: 2,
    name: "Movie Api",
    technologies: "HTML, CSS, JavaScript",
    image: "/Portfolioimgs/Speenerimg.jpg",
    github: "https://github.com/VirugamaHelly/Api_Projects",
    liveLink: 'https://legendary-malasada-22b754.netlify.app',
  },
  {
    id: 3,
    name: "Weather Api",
    technologies: "HTML, CSS, JavaScript",
    image: "/Portfolioimgs/Whether.jpg",
    github: "https://github.com/VirugamaHelly/Api_Projects",
    liveLink: 'https://splendid-meringue-01006c.netlify.app',
  },
  {
    id: 4,
    name: "E-Commerce Website",
    technologies: "HTML, CSS, JavaScript",
    image: "/Portfolioimgs/Project5.jpg",
    github: "https://github.com/VirugamaHelly/JavaScript_Project",
    liveLink: 'https://splendid-cajeta-4fa9b4.netlify.app',
  },
  {
    id: 5,
    name: "E-Commerce Website",
    technologies: "HTML, CSS, JavaScript, React js",
    image: "/Portfolioimgs/React_1_e-c.jpg",
    github: "https://github.com/VirugamaHelly/React_E-Commerce_Project",
    liveLink: 'https://spontaneous-clafoutis-42d00d.netlify.app',
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> 
          {projectsData.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg w-full md:w-[350px]">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-between">
                <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full mr-2" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
                <a href={project.liveLink} className="inline-block bg-gradient-to-r from-blue-400 to-green-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i> Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
