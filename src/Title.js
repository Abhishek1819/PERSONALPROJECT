import React from "react";
import "../src/App.css";
// import Image from "../src/asset/pic.JPG"

function Title() {
  const name = "Abhisha";
  const leadText = "I am a website developer from India";

  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="row-12 row-md-6" data-aos="flip-right">
            <h1 className="FontStyle font-weight-light">
              <span className="FontStyle text-danger">about</span> Us
            </h1>
            <p>
              <span className='line1'></span>
              <i className='fa fa-heart text-danger'></i>
              <span className='line1'></span>
            </p>
          <br />
          <br />
          <img
            // src={Image}
            src="http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/about1.jpg"
            alt="Abhishek-Giri"
            className="rounded-circle px-5 mx-5 serv"
            style={{ maxWidth: "35%" }}
          />
          <img
            src="http://www.coffeecreamthemes.com/themes/perfectcouple/wordpress/wp-content/uploads/2014/10/about2.jpg"
            alt="Abhishek-Giri"
            className="rounded-circle px-5 mx-5 serv"
            style={{ maxWidth: "35%" }}
          />
        </div>
        <div className="row-12 row-md-6 pt-5" data-aos="slide-up">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, We are <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">{leadText}</h4>
        </div>
      </div>
    </div>
  );
}

export default Title;

