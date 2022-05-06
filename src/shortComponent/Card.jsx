import React from "react";
import UserPost from "../userPost/UserPost";

function Card() {
  return (
    <div>
      <div className="container mt-2">
        <div className="row">
        
            <h3 className="text-center">Online Fetch API Data</h3>
        
        </div>
        <div className="row">
       
               <UserPost />
               </div>
         
       
      </div>
    </div>
  );
}

export default Card;
