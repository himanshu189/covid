import React, { useState } from "react";
import NavBarr from "./navbarr";
import "./custom.css";
import { Link, Redirect } from "react-router-dom";

const Signup = () => {
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    username: "",
    password: "",
  });

  const img1 = 'img1.jpg';
  const img2= 'img2.jpg';
  const img3 = 'img3.jpeg';

  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    var letters = /^[a-zA-Z]+$/;
    var phoneno = /^\d{10}$/;
    var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var letters1 = /^[0-9a-zA-Z]+$/;
    var l = details.password.length;
    var email1=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var flag = true;
    if (!details.fname.trim().match(letters)) {
      flag = false;
         document.getElementById("fname1").innerHTML="please fill valid first name !"
     document.getElementById("fname1").style.color = "#ff0000";
     document.getElementById("fname").style.border = "thin solid #ff0000";
    }
    else{
          document.getElementById("fname1").innerHTML=""
          document.getElementById("fname").style.border = "";
      }
    if (!details.lname.trim().match(letters)) {
      flag = false;
       document.getElementById("lname1").innerHTML="please fill valid last name !"
      document.getElementById("lname1").style.color = "#ff0000";
      document.getElementById("lname").style.border = "thin solid #ff0000";
     }
     else{
           document.getElementById("lname1").innerHTML=""
           document.getElementById("lname").style.border = "";
       
    }
    if (!details.contact.trim().match(phoneno)) {
      flag = false; document.getElementById("contact1").innerHTML="please fill valid contact number !"
      document.getElementById("contact1").style.color = "#ff0000";
      document.getElementById("contact").style.border = "thin solid #ff0000";
     }
     else{
           document.getElementById("contact1").innerHTML=""
           document.getElementById("contact").style.border = "";
    }
    if (!details.password.match(pwd)) {
      
      flag = false;document.getElementById("password1").innerHTML="please fill valid password !"
      document.getElementById("password1").style.color = "#ff0000";
      document.getElementById("password").style.border = "thin solid #ff0000";
     }
     else{
           document.getElementById("password1").innerHTML=""
           document.getElementById("password").style.border = "";
    }
    if (!details.username.trim().match(letters1)) {
      flag = false;
      document.getElementById("username1").innerHTML="please fill valid username !"
      document.getElementById("username1").style.color = "#ff0000";
      document.getElementById("username").style.border = "thin solid #ff0000";
     }
     else{
           document.getElementById("username1").innerHTML=""
           document.getElementById("username").style.border = "";
    }
    if (!details.email.trim().match(email1)) {
      flag = false;
      document.getElementById("email1").innerHTML="please fill valid email !"
      document.getElementById("email1").style.color = "#ff0000";
      document.getElementById("email").style.border = "thin solid #ff0000";
     }
     else{
           document.getElementById("email1").innerHTML=""
           document.getElementById("email").style.border = "";
    }

    if (flag) {
      var myobj = JSON.stringify(details);
      localStorage.setItem("testobj", myobj);
      setCount(1);
      console.log(details);
    }
  };
 
  return (
    <div>
      
      <div className="sign ">
        <div className="row marg">
          <div className="col-md-5 formpad">
            <div className="form1 ">
              <h2 className="text-center signh2">Signup</h2>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label className="formlabel" for="fname">
                  First Name:
                </label>
                <br></br>
                <input
                  className="forminput"
                 
                  id="fname"
                  type="text"
                  onChange={(e) =>{ setDetails({ ...details, fname: e.target.value });document.getElementById("fname1").innerHTML="";
           document.getElementById("fname").style.border = "";
                  }
                   
                  }
                />
                <br></br>
                <span id="fname1"></span><br></br>
                <label className="formlabel" for="lname">
                  Last Name:
                </label>
                <br></br>
                <input
                  className="forminput"
                  
                  id="lname"
                  type="text"
                  onChange={(e) =>
                    {setDetails({ ...details, lname: e.target.value });document.getElementById("lname1").innerHTML="";
           document.getElementById("lname").style.border = "";}
                  }
                />
                <br></br>
                <span id="lname1"></span><br></br>

                <label className="formlabel" for="email">
                  Email:
                </label>
                <br></br>
                <input
                  className="forminput"
                  
                  id="email"
                  type="email"
                  onChange={(e) =>{setDetails({ ...details, email: e.target.value });document.getElementById("email1").innerHTML="";
           document.getElementById("email").style.border = "";}
                    
                  }
                />
                <br></br>
                <span id='email1'></span><br></br>
                <label className="formlabel" for="contact">
                  Contact Number:
                </label>
                <br></br>
                <input
                  className="forminput"
                  
                  id="contact"
                  type="text"
                  onChange={(e) =>{setDetails({ ...details, contact: e.target.value });document.getElementById("contact1").innerHTML="";
           document.getElementById("contact").style.border = "";}
                    
                  }
                />
                <br></br>
                <span id="contact1"></span><br></br>

                <label className="formlabel" for="username">
                  Username:
                </label>
                <br></br>
                <input
                  className="forminput"
                  
                  id="username"
                  type="text"
                  onChange={(e) =>{setDetails({ ...details, username: e.target.value });document.getElementById("username1").innerHTML="";
           document.getElementById("username").style.border = "";}
                    
                  }
                />
                <br></br>
                <span id="username1"></span><br></br>

                <label className="formlabel" for="password">
                  Password:
                </label>
                <br></br>
                <input
                  className="forminput"
                  
                  id="password"
                  type="password"
                  onChange={(e) =>{setDetails({ ...details, password: e.target.value });document.getElementById("password1").innerHTML="";
           document.getElementById("password").style.border = "";}
                    
                  }
                />
                <br></br>
                <span id="password1"></span><br></br>

                <div className="text-center padbtt">
                  <button className="btn btn-lg btn-success" type="submit">
                    Signup
                  </button>
                  <br></br>
                  <span>
                    Already have an account? <Link to="/login">login</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-7 pad-img'>
          <img className="imgsin" src={img1} width='900px'></img>
    
          </div>
          {count === 1 ? <Redirect to="/login" /> : null}
        </div>
      </div><h3 className="footer">COPYRIGHT 	&#169; HIMANSHU TYAGI</h3>
    </div>
  );
};

export default Signup;
