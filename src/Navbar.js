import React from "react";
// import { Link } from "react-router-dom";
import "../src/App.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top ">
      <div className="container my-2">
        <a href="/" className="navbar-brand text-danger font-weight-bold">
          <h3 className="FontStyle">Perfect Couple</h3>
        </a>

        
      </div>
    </nav>
  );
}

export default Navbar;


// <form className="d-flex" role="search">
//           <Link to="/contact" className="ml-auto mx-3">
//             <button className="btn btn-outline-info ml-auto">Contact me</button>
//           </Link>
//           <button
//             className="navbar-toggler"
//             data-toggle="collapse"
//             data-target="#collapseNav"
//           >
//             <span className="fas fa-bars text-dark"></span>
//           </button>
//           <div
//             className="collapse navbar-collapse flex-grow-0"
//             id="collapseNav"
//           >
//             <div className="navbar-nav">
//               <a
//                 href="/allProjects"
//                 className="nav-item nav-link text-dark h6 mx-3 my-auto"
//               >
//                 <h5>Projects</h5>
//               </a>
//               <a
//                 href="/allBlogs"
//                 className="nav-item nav-link text-dark h6 mx-3 my-auto"
//               >
//                 <h5>Blogs</h5>
//               </a>
//             </div>
//           </div>
//         </form>