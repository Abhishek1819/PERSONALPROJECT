import React from "react";
// import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black",margin:"-4% 0%" }}
      >
        <div className="py-5" data-aos="slide-left">
          <h2 className="text-light">This not just a website, it's a love💝 of ABhisHA💕</h2>
          <a href="/write-a-recommendation">
            <button className="btn btn-outline-light btn-lg mt-3">
              Let's talk
            </button>
          </a>
        </div>
        <div className="row" data-aos="slide-right">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">More Links</h5>
            <a href="/" className="text-light d-block">
              Home
            </a>
            <a href="/allProjects" className="text-light d-block">
              Story
            </a>
            <a href="/allBlogs" className="text-light d-block">
              Blogs
            </a>
            <a href="/write-a-recommendation" className="text-light d-block">
              Write a recommendation <i className="fas fa-heart text-light"></i>
            </a>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
              eligendi exercitationem earum iste, quisquam officia tempora ea,
              perferendis nesciunt obcaecati molestiae dolorem! Quae neque atque
              error facilis! Repellendus, quod iusto?
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">Social</h5>
            <a href="/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fas fa-envelope text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="text-muted py-3">
          <p>© 2023 Abhisha😍💖 </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
