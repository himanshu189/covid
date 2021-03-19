import React from 'react';
import "./custom.css";
const Error = () => {
  const four='four.gif'
  return ( <div className='p-5 text-center'>

<h1 className="p-5 text-center"> 404 ..<br></br> Page Not Found</h1>
<img src={four}></img>

  </div> );
}
 
export default Error;