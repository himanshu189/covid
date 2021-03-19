import React, { useEffect, useState } from 'react';
import "./custom.css";
import { Link } from "react-router-dom";


const NavBarr2 = () => {
  const logo = "download.png";
  const[start,setStart]=useState(0)

  return ( 
    <div>
    <ul className='ul1'>
      <li className="padlogo li1">
        <Link to="/">
          <img  className='bord' src={logo} alt="logo" width="180px" />
        </Link>
      </li>
      <div className=" ml-auto padlogo2">
        
      <li className='li1'>
          <Link to="/news">
            <button  style={{color:start===4?'black':"white"}} onClick={()=>setStart(4)} className="btn btnbg  btn-lg ">News</button>
          </Link>
        </li>
        
        <li className='li1'>
          <Link to="/login">
            <button  style={{color:start===1?'black':"white"}} onClick={()=>setStart(1)} className="btn btnbg  btn-lg ">Login</button>
          </Link>
        </li> <li className='li1'>
          <Link to="/signup">
            <button  style={{color:start===2?'black':"white"}} onClick={()=>setStart(2)} className="btn btnbg  btn-lg ">Signup</button>
          </Link>
        </li>
        
      </div>
    </ul>
  </div>
   );
}
 
export default NavBarr2;