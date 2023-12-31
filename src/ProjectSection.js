import React from "react";
import ProjectCard from "./ProjectCard";
import { Consumer } from "./context";
// import { Link } from "react-router-dom";

function ProjectSection() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <div className="container text-center my-5">
            <div data-aos="slide-down">
              <h1 className="FontStyle font-weight-light">
                <span className="FontStyle text-dark">Our Love Story</span>
              </h1>
              <p>
                <span className='line1'></span>
                <i className='fa fa-heart text-danger'></i>
                <span className='line1'></span>
              </p>
            </div>
            <div className="row my-5 pt-3 ">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="col-12 col-md-4 my-2">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <div className="d-flex servs border border-dark rounded py-1 justify-content-center read click" data-aos="slide-up" style={{margin:"0% 39%", maxWidth:"22%"}}>
              <a href="/allProjects" className="text-light text-center text-decoration-none">
                <h5>
                  READ THE WHOLE STORY
                </h5>
              </a>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default ProjectSection;
