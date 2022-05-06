import React from "react";
import Second from "../allPhotos/ab.jpg";

function About() {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-7 ">
          <h2 className="text-center">About OFA..!! Data </h2>
          <p className="text-justify shadow-lg p-3 rounded">
            Sorry for that code dump, but not sure how to explain what I am
            trying to do otherwise. I saw something about using require() but I
            could not get that to work and now I am kind of stumped. Been at
            this for a while now so I hope that some of you would give some hint
            as to how to proceed. Sorry for that code dump, but not sure how to
            explain what I am trying to do otherwise. I saw something about
            using require() but I could not get that to work and now I am kind
            of stumped. Been at this for a while now so I hope that some of you
            would give some hint as to how to proceed.Sorry for that code dump,
            but not sure how to explain what I am trying to do otherwise. I saw
            something about using require() but I could not get that to work to how to proceed.  
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
