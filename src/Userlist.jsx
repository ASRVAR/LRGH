import { useEffect, useState } from "react";

function Userlist() {
  const [user, setUser] = useState();
 // const [view, setView] = useState(false);
//   useEffect(() => {
//     //fetch('https://gorest.co.in/public/v2/users').than((response)=>response.json()).then((userData)=>{setUser(userData)})
//   }, []);

  const viewData = () => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((showData) => {
        setUser(showData)
      });
  };

  //------------------------------END-------------------------------------------------
  return (
    <>
      <div className="container">
          <div className="row">
              <div className="col-md-3">
              <button className="btn btn-danger" onClick={viewData}>
          View Data
        </button>
              </div>
          </div>
        <div className="row mt-3">
        <table className="table table-bordered  text-light">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email Id</th>
              <th>Gender</th>
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
                  <td>{showData.gender}</td>
                  <td>{showData.status}</td>

                </tr>
              ))}
          </thead>
        </table>
        </div>
      </div>
    </>
  );
}

export default Userlist;
