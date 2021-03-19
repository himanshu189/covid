import React, { useState } from "react";
import "./custom.css";
import NavBarr from "./navbarr";
import Overview from "./overview";
import Preventions from "./preventions";
import Symptoms from "./symptoms";

const Home = () => {
  const headerimg = "covid.png";
  const[start,setStart]=useState(1)

  return (
    <div>
      <div className="container">
        <img className="img1" src={headerimg} alt="header" width="60%"></img>
      </div>
      <div>
        <h1 className="text-center covid">COVID 19</h1>
      </div>
      <div className="container">
        <div className=" overview">
          <button className='stepper' style={{color:start===1?'rgb(21, 116, 172)':"#4c524d"}} onClick={()=>setStart(1)}>overview</button>{" "}
          <button className="item stepper" style={{color:start===2?'rgb(21, 116, 172)':"#4c524d"}} onClick={()=>setStart(2)}>Preventions</button>
          <button className="item stepper" style={{color:start===3?'rgb(21, 116, 172)':"#4c524d"}} onClick={()=>setStart(3)}>Symptoms</button>
        </div>
        {start===1?<Overview/>:start===2?<Preventions/>:<Symptoms/>}
      </div>
      <h3 className="footer">COPYRIGHT &#169; HIMANSHU TYAGI </h3>

    </div>
  );
};

export default Home;
