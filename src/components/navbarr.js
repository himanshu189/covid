import React, { useEffect, useState } from 'react';
import "./custom.css";
import { Link } from "react-router-dom";


const NavBarr = ({isauth,setIsAuth,private1,setPrivate1} ) => {
  const logo = "download.png";
  const[start,setStart]=useState(0)
const handleRoute=()=>{
  localStorage.setItem("token", false);
   setPrivate1('g')
}

  return ( 
    <div>
    <ul className='ul1'>
      <li className="padlogo li1">
        <Link to="/">
          <img className='bord' onClick={()=>setStart(6)} src={logo} alt="logo" width="180px"  />
        </Link>
      </li>
      <div className=" ml-auto padlogo1">
      <li className='li1'>
          <Link to="/news">
            {" "}
            <button  style={{color:start===5?'black':"white"}} onClick={()=>setStart(5)} className="btn btnbg btn-lg ">News</button>
          </Link>
        </li>
        <li className='li1'>
          <Link to="/corona">
            {" "}
            <button  style={{color:start===1?'black':"white"}} onClick={()=>setStart(1)} className="btn btnbg btn-lg ">WorldWide</button>
          </Link>
        </li>
        <li className='li1'>
          <Link to="/country">
            <button style={{color:start===2?'black':"white"}} onClick={()=>setStart(2)} className="btn btnbg  btn-lg ">Countrywise</button>
          </Link>
        </li>
        <li className='li1'>
          <Link to="/daily">
            {" "}
            <button className="btn btnbg  btn-lg " style={{color:start===3?'black':"white"}} onClick={()=>setStart(3)}>By Date</button>
          </Link>
        </li>
        <li className='li1'>
        <Link to="/">
            <button className="btn btnbg1  btn-lg " onClick={handleRoute} style={{color:start===4?'black':"white"}}  >Logout</button>
            </Link>
        </li>
         
        
      </div>
    </ul>
  </div>
   );
}
 
export default NavBarr;