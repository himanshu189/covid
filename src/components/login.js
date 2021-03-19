import React, { useState } from "react";
import NavBarr from "./navbarr";
import { Redirect, Link } from "react-router-dom";

const Login = ({private1,setPrivate1 , isauth , setIsAuth}) => {
  const img1 = "img1.jpg";

  const [details1, setDetails1] = useState({
    username: "",
    password: "",
  });
  const [valid, setValid] = useState(0);
  const handleLogin = (e) => {
    e.preventDefault();
    var signdetails=''
   if(localStorage.length>0){ var text = localStorage.getItem("testobj");
    signdetails = JSON.parse(text);}
    else{
      alert('please signup first')
    }
   if(details1.username&&details1.password && signdetails ){ if (
      signdetails.username === details1.username.trim() &&
      signdetails.password === details1.password
    ) { 
      localStorage.setItem("token", true);
      alert('login successful')
      setPrivate1({details1})
      setIsAuth(true)
      setValid(1);
    } else {
      alert("incorrect password or username");
    }
  };}

  return (
    <div>
      <div className="sign ">
        <div className="row marg padlogin1">
          <div className="col-md-5 formpad">
            <div className="form1 ">
              <h2 className="text-center signh2">Login</h2>
              <form onSubmit={(e) => handleLogin(e)}>
                <label className="formlabel" for="username">
                  Username:
                </label>
                <br></br>
                <input
                  className="forminput"
                  required
                  id="username"
                  type="text"
                  onChange={(e) =>
                    setDetails1({ ...details1, username: e.target.value })
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
                  required
                  id="password"
                  type="password"
                  onChange={(e) =>
                    setDetails1({ ...details1, password: e.target.value })
                  }
                />
                <br></br>                <span id="password1"></span><br></br>

                <div className="text-center padbtt">
                  <button className="btn btn-lg btn-success" type="submit">
                    Login
                  </button>
                  <br></br>
                  <span>
                    Don't have an account? <Link to="/signup">signup</Link>
                  </span>
                </div>
              </form>
            </div>
            
          </div><div className="col-md-7 pad-img">
              <img className="imgsin" src={img1} width="900px"></img>
            </div>
          {valid === 1 ? <Redirect to="/dash" /> : null}
        </div>
      </div><h3 className="footer">COPYRIGHT 	&#169; HIMANSHU TYAGI</h3>
    </div>
  );
};

export default Login;
