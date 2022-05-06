import React from "react";
import First from "../allPhotos/api-banner.jpg";
import Second from "../allPhotos/banner.png";

function Slider() {
 
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={First} className="d-block w-100 rounded mx-auto d-block" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Second} className="d-block w-100 rounded mx-auto d-block" alt="..." />
              </div>
             
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
