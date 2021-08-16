import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './css/Slideshow.scss';

const fadeImages = [
  "/images/Asset0010.jpg",
  "/images/Asset0027.jpg",
  "/images/slide_7.jpg"
];

function Slideshow() {

  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={require("./images/Asset0010.jpg")}/> 
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={require("./images/Asset0027.jpg")} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            {/* <img src={require(fadeImages[2])} /> */}
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;