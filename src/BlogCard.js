import React from "react";
import { Link } from "react-router-dom";

function BlogCard(props) {
  const {  title, excerpt, imageUrl, date } = props.blog;
  return (
    <div className="card shadow h-100 serv">
      <img src={imageUrl} alt={title} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title pt-4">{title}</h4>
        <span className="date">{date}</span>
        <p className="card-text pt-3">{excerpt}</p>
        <Link className="stretched-link"></Link>
      </div>
    </div>
  );
}

export default BlogCard;


// <Link to={`/blog/${id}`} className="stretched-link"></Link>