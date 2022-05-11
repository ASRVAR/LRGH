import React from "react";
import Userlist from "../Userlist";
import UserPost from "../userPost/UserPost";

function Card() {
  return (
    <div>
      <div className="container mt-2 bg-secondary rounded">
        <div className="row">
          <h3 className="text-center text-light mt-3">Online Fetch API Data</h3>
        </div>
        <div className="row">
          <div className="col-md-6 text-center mt-2o">
            <h4 className="text-light">User Post With Title</h4>
            <UserPost />
          </div>
          <div className="col-md-6 text-center mt-2 ">
            <h4 className="text-light">User List With Status</h4>
            <Userlist />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
