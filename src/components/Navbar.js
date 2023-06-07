import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="navbar" style={{backgroundColor: props.mode==='DARK'?'darkblue':'lightblue'}}>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:props.mode==='LIGHT'?'white':'#002244',color:props.mode==='LIGHT'?'black':'white'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to ="/" style={{color:props.mode==='LIGHT'?'black':'white'}}>TextUtils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode==='LIGHT'?'black':'white'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to ="/about" style={{color:props.mode==='LIGHT'?'black':'white'}}>About</Link>
        </li>
       
       
      </ul>
      
    </div>
    
  </div>
  {/* <p>_____________________________________________________________________________________________________________________________________________</p> */}
  <div className="container">
   
  <div className="form-check form-switch float-right align-self-end">
  <input className="form-check-input"  onClick ={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='LIGHT'?'black':'white'}}>{props.mode} MODE</label>
</div>

</div>
</nav>
</div>
  )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Set title here",
    about:"About us here"
}
    
