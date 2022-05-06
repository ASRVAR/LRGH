import { useEffect, useState } from "react";
import UserPost from './userPost/UserPost'


function Userlist() {
  const [user, setUser] = useState();
  let PageSize = 10;

  const [currentPage, setCurrentPage] = useState(1);

 
  // const [view, setView] = useState(false);
  //   useEffect(() => {
  //     //fetch('https://gorest.co.in/public/v2/users').than((response)=>response.json()).then((userData)=>{setUser(userData)})
  //   }, []);

  const viewData = () => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((showData) => {
        setUser(showData);
      });
  };

  
  //------------------------------END-------------------------------------------------
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <h3>User List</h3>
            <div className="row">
            
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email Id</th>
                  {/* <th>Gender</th> */}
                  <th>Status</th>
                </tr>
              </thead>
              <thead>
                {user &&
                  user.map((showData) => (
                    <tr key={showData.id}>
                      <td>{showData.id}</td>
                      <td>{showData.name}</td>
                      <td>{showData.email}</td>
                      {/* <td>{showData.gender}</td> */}
                      <td>{showData.status}</td>
                    </tr>
                  ))}
              </thead>
            </table>
           
                <button className="btn btn-success" onClick={viewData}>
                  View Data
                </button>
              
          </div>
          <div className="col-md-6">
            <UserPost />
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlist;
