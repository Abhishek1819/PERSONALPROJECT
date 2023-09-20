import React from 'react';
import VideoBg from '../src/asset/video.mp4';
import "../src/App.css";
import Time from './Time';

const Videotop = () => {
  return (
    <div className='main'>
      <div className='overlay'></div>
      <video src={VideoBg} autoPlay loop  />
      <div className='content' data-aos="zoom-out">
        <h1 className='FontStyles'>Abhi & Isha</h1>
        <br/>
        <h4 style={{fontSize:"2rem"}}>ARE GETTING COMMITED</h4>
        <p>
          <span className='line'></span>
          <i className='fa fa-heart text-danger'></i>
          <span className='line'></span>
        </p>
        <h3>May 3rd, 2016</h3> 
        <Time />
      </div>
    </div>
  )
}

export default Videotop;
