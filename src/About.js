import React from "react";
import "../src/App.css";
// import Image from "../src/asset/pic.JPG";

function About() {
  const name = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra nunc, non scelerisque ligula. Cras vel justo nulla. Vestibulum a sollicitudin metus, faucibus fermentum leo.";
  // const leadText = "I am a website developer from India";


  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="row-12 row-md-6">
          <h1 className="FontStyle font-weight-light">
            <span className="FontStyle text-danger">Most Important </span>People
          </h1>
          <p>
            <span className='line1'></span>
            <i className='fa fa-user text-danger'></i>
            <span className='line1'></span>
          </p>
          <br/>
          <br/>
          <div className="div1" style={{ display: "flex" }}>
            <div className="row-12 row-md-6">
              <h4 className="card-title pt-4">ADITYA GIRI</h4>
              <span className="date">GROOM'S BROTHER</span>
              <p className="font-weight-light pt-3"  >
                {name}
              </p>
            </div>
            <img
              // src={Image}
              src="http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/about1.jpg"
              alt="Abhishek-Giri"
              className="rounded-circle px-3 serv about im"
            />
            <img
              src="http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/people1.jpg"
              alt="Abhishek-Giri"
              className="rounded-circle px-3  serv about im"
            />
            <div className="row-12 row-md-6">
              <h4 className="card-title pt-4">KRISH RATHI</h4>
              <span className="date">BRIDE'S BROTHER</span>
              <p className="font-weight-light pt-3"  >
                {name}
              </p>
            </div>
          </div>
          <div className="div1" style={{ display: "flex" }}>
            <div className="row-12 row-md-6">
              <h4 className="card-title pt-4">MANOJ GIRI</h4>
              <span className="date">GROOM'S FATHER</span>
              <p className="font-weight-light pt-3"  >
                {name}
              </p>
            </div>
            <img
              src="http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/people3.jpg"
              alt="Abhishek-Giri"
              className="rounded-circle px-3 serv about im"
            />
            <img
              src="http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/people4.jpg"
              alt="Abhishek-Giri"
              className="rounded-circle px-3 serv about im"
            />
            <div className="row-12 row-md-6">
              <h4 className="card-title pt-4">RAVINDAR RATHI</h4>
              <span className="date">BRIDE FATHER</span>
              <p className="font-weight-light pt-3"  >
                {name}
              </p>
            </div>
          </div>
          <div className="div1" style={{ display: "flex" }}>
            <div className="row-12 row-md-6">
              <h4 className="card-title pt-4">MUKTI GIRI</h4>
              <span className="date">GROOM'S MOM</span>
              <p className="font-weight-light pt-3"  >
                {name}
              </p>
            </div>
            <img
              src="http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/gallery-big07.jpg"
              alt="Abhishek-Giri"
              className="rounded-circle px-3 serv about im"
            />
            <img
              src="http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/gallery-big08.jpg"
              alt="Abhishek-Giri"
              className="rounded-circle px-3 serv about im"
            />
            <div className="row-12 row-md-6">
              <h4 className="card-title pt-4">POONAM RATHI</h4>
              <span className="date">BRIDE'S MOM</span>
              <p className="font-weight-light pt-3"  >
                {name}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;





// <div className="my-5">
//       <div className="container text-center py-5">
//         <h1 className="text-center font-weight-light">
//           <span className="text-info">About</span> me
//         </h1>
//         <div className="lead">
//           I can develop the front and the back of an app
//         </div>
//         <div className="row">
//           <div className="col-12 col-mid-6 px-5 pt-5">
//             <h5>What I can do?</h5>
//             <p className="text-justify">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Aspernatur, corrupti praesentium. Ipsum ullam, laborum eaque quia
//               qui aliquid labore pariatur ducimus est itaque reiciendis saepe
//               obcaecati necessitatibus quaerat porro delectus!
//             </p>
//           </div>
//           <div className="col-12 col-mid-6 px-5 pt-5">
//             <h5>What am I doing currently?</h5>
//             <p className="text-justify">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
//               quibusdam in, sunt incidunt perspiciatis non deleniti recusandae
//               molestias culpa laboriosam id numquam, nemo ducimus, expedita
//               repellendus saepe aliquid ipsam odit!
//             </p>
//           </div>
//           <div className="col-12 col-mid-6 px-5 pt-5">
//             <h5>What do I believe in?</h5>
//             <p className="text-justify">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
//               quibusdam in, sunt incidunt perspiciatis non deleniti recusandae
//               molestias culpa laboriosam id numquam, nemo ducimus, expedita
//               repellendus saepe aliquid ipsam odit!
//             </p>
//           </div>
//           <div className="col-12 col-mid-6 px-5 pt-5">
//             <h5>How I can help you?</h5>
//             <p className="text-justify">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
//               quibusdam in, sunt incidunt perspiciatis non deleniti recusandae
//               molestias culpa laboriosam id numquam, nemo ducimus, expedita
//               repellendus saepe aliquid ipsam odit!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>