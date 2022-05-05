import React from "react";
import { useState } from "react";

function UserPost() {
  const [post, setPost] = useState();

  const loadPost = () => {
    fetch("https://gorest.co.in/public/v2/posts")
      .then((response) => response.json())
      .then((dataPost) => {
        setPost(dataPost);
      });
  };
  return (
    <>
   
        <h3>User Post</h3>
    
    {post && post.map((dataPost)=>
    (
        <>
        <h6 key={dataPost.id}>{dataPost.title}</h6>
        <p key={dataPost.body} className="border">{dataPost.body}</p>
        </>
    )
    )}
      <button className="btn btn-success" onClick={loadPost}>View Post</button>
      
     
    </>
  );
}

export default UserPost;
