import React from "react";
// import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { Consumer } from "./context";

function BlogSection() {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <div className="back my-5">
            <div className="container text-center my-5 py-5">
              <div data-aos="slide-down">
                <h1 className="FontStyle font-weight-light">
                  <span className="FontStyle text-dark">Blog</span>
                </h1>
                <p>
                  <span className='line1'></span>
                  <i className='fa fa-heart text-danger'></i>
                  <span className='line1'></span>
                </p>
              </div>
              <div className="row my-5 pt-3">
                {blogs.slice(0, 3).map((blog) => (
                  <div key={blog.id} className="col-12 col-md-4 my-2">
                    <BlogCard blog={blog} />
                  </div>
                ))}
              </div>
              <div className="d-flex servs border border-dark rounded justify-content-center reads" data-aos="slide-up">
                <a href="/allblogs" className="text-light text-center text-decoration-none">
                  <h5>
                    READ MORE
                  </h5>
                </a>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
}

export default BlogSection;
