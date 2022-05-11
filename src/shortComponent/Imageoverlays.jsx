import React from "react";
import Second from "../allPhotos/img-one.png";
import First from "../allPhotos/img-two.png";

function Imageoverlays(props) {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-dark text-white">
              <img src={Second} className="card-img img-fluid" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Story by LearnEnglish Kids</h5>
                <br/>
                <p className="card-text">
           
                  This content is a little bit longer. <br />Is there a patron saint
                  of your country? <br />
                  Do you have a story about a dragon in <br /> your culture? Write a
                  comment and tell us about it!
                </p>
                <br/>
                <p className="card-text">{date} {time}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-dark text-white">
              <img src={First} className="card-img img-fluid" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">{props.title}</h5>
                <br/>
                <p className="card-text">
                This content is a little bit longer. <br />  Is there a patron saint
                 of your country?<br />
                  Do you have a story about a dragon in <br />
                         your culture? Write a
                         comment and tell us about it!
                 
                </p>
                <br/>
                <p className="card-text">{date} {time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imageoverlays;
