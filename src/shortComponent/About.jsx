import React from "react";
import Second from "../allPhotos/ab.jpg";

function About(props) {
 
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-7 ">
          <h2 className="text-center">About OFA..!! Data HeadLine </h2>
          <p className="text-justify shadow-lg p-3 rounded">
            {props.title}
          </p>
        </div>
        <div className="col-md-5 mt-5   p-2 rounded">
            <img className="img-fluid rounded mx-auto d-block" src={Second} alt="about Banner"/>
        </div>
      </div>
    </div>
  );
}

export default About;
