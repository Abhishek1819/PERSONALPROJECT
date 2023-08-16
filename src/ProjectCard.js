import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  const { title, excerpt, imageUrl } = props.project;
  return (
    <div className="img-fluid rounded-circle px-1 mx-2 serv">
      <img src={imageUrl} alt={title} className="card-img-top rounded-circle serv" />
      <div className="card-body">
        <h4 className="card-title pt-4">{title}</h4>
        <p className="card-text pt-3">{excerpt}</p>
        <Link className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default ProjectCard;

// <Link to={`/project/${id}`} className="stretched-link"></Link>
