import React from "react";
import "./Project.css";

const projectDetails = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
    imagelink:require('./images/p1.png'),
    projectlink:"",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
    imagelink:require('./images/p2.jpeg'),
    projectlink:"",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
    imagelink:require('./images/project3.jpeg'),
    projectlink:"",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of Project 4",
    imagelink:require('./images/project4.png'),
    projectlink:"",
  },
];

export function Project() {
  return (
    <div id="projects">
      <h1>VISHVA K</h1>
      <div className="project-list">
        {projectDetails.map((project) => (
          <div key={project.id} className="project">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div  className="image">
            <img src={project.imagelink} alt={project.title} id="img"></img>
            </div>
            <a href={project.projectlink}><h2>Github Link</h2></a>
          </div>
        ))}
      </div>
    </div>
  );
}
