import React, { useEffect, useState } from "react";
import "./custom.css";

const Dasboard = () => {
  const headerimg = "user.webp";
  const banner='banner.png'
  const [user, setUser] = useState();

  useEffect(() => {
    var text = localStorage.getItem("testobj");
    var signdetails = JSON.parse(text);
    setUser(signdetails);
  }, []);
  return (
    <div>
      <div className="container">
        <img className="img1" src={headerimg} alt="header" width="60%"></img>

      { user&&  <div class="card "style={{ 
      backgroundImage: `url("banner.png")` 
    }}>
          <div class="card-body">
            <h1 class="card-title text-center "><b>Welcome </b> {user.fname} {user.lname}</h1>
           <div className="paddash"> <table className="table2">
            <thead className="tablehead1">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Username</th>

            </thead>
            <tr  className="tablerow1">
              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.email}</td>
              <td>{user.contact}</td>
              <td>{user.username}</td>

            </tr>

            </table></div>
           
          </div>
        </div>}

</div>      <h3 className="footer">COPYRIGHT 	&#169; HIMANSHU TYAGI</h3>

    </div>
  );
};

export default Dasboard;
