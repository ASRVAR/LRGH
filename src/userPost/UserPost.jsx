import React, { useEffect } from "react";
import { useState } from "react";
import {Lines} from "react-preloaders";

function UserPost() {
  const [post, setPost] = useState();
    
  // useEffect(() => {
  //   loadPost();
  // }, []);

  const loadPost = () => {
    fetch("https://gorest.co.in/public/v2/posts")
      .then((response) => response.json())
      .then((dataPost) => {
        setPost(dataPost);
      });
  };
  return (
    <>
      {post &&
        post.map((dataPost) => (
          <>
            <div className=" shadow p-3 mb-5 bg-body rounded">
              <div className="card">
                <div className="card-body">
                  <h5
                    class="card-title shadow-sm p-3 mb-5 bg-body rounded"
                    key={dataPost.id}
                  >
                    {dataPost.title}
                  </h5>
                  <p class="card-text" key={dataPost.body}>
                    {dataPost.body}
                  </p>
                </div>
              </div>
            </div>
           
          </>
        ))}
      <button className="btn btn-success" onClick={loadPost}>
        View Post
      </button>
    
    </>
  );
}

export default UserPost;
