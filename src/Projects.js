import React, { Component } from "react";
import PROJETCS from "./data/projects";

class Project extends Component {
  render() {
    const { title, desc, image, link } = this.props.project;
    return (
      <div style={{ display: "inline-block", margin: 10, width:300 }}>
        <h3>{title}</h3>
        <img src={image} alt="profile" style={{ height: 120, width: 200 }} />
        <p>{desc}</p>
        <a href={link}>{link}</a>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Highlighted projects</h2>
        <div>
          {PROJETCS.map((project) => {
            return <Project key={project.id} project={project} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
