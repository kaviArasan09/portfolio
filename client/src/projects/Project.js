import React from 'react';
import './Project.css'

const projectsData = [
  {
    title: 'Project 1',
    description: 'Student Data Management System',
    imageUrl: require('./CRUD.jpeg'),
    projectLink: 'https://github.com/kaviArasan09/KAVI-MERN-CRUD',
  },
  {
    title: 'Project 2',
    description: '"Todo" task application',
    imageUrl: require('./Todo.webp'),
    projectLink: 'https://github.com/kaviArasan09/Todo_app_JS.git',
  },
  {
    title: 'Project 3',
    description: 'Weather App',
    imageUrl: require('./weather.png'),
    projectLink: 'https://github.com/kaviArasan09/Weather_app.git',
  },
];

const Project = () => {
  return (
    <div className='main-container'>
      <h2>Projects</h2>
      <div className='projects-container'>
        {projectsData.map((project, index) => (
          <div key={index} className='project-item'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img className='img' src={project.imageUrl} alt={project.title} style={{ maxWidth: '30%' }} />
            <p>
              <a href={project.projectLink}>
                View Project
              </a>
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
