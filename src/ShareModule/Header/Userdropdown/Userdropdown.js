import React from 'react';
import "./Userdropdown.css"
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Userdropdown = () => {
  

  return (
    
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" 
  data-bs-toggle="dropdown" aria-expanded="false">
       <FaUserCircle  style={{fontSize:"25px",padding:"2px",textAlign:"center", margin:"4px"}}/>
  </button>
  <ul className="dropdown-menu">
   <Link className="dropdown-item" to="/register"> <li>Register</li></Link>
   <Link  className="dropdown-item" to="/login" > <li>Login</li></Link>
   
  </ul>
</div>
  );
};

export default Userdropdown;
