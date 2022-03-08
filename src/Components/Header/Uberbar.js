import React from 'react';
import Logo from '../../img/stevejobs.jpg';
import "./UberBar.css";

function Uberbar() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
        <div className='logo'>
          <h3>Edvora</h3>
        </div>
        <div className='user-account'>
          <h4>Dhruv Singh</h4>
          <img src={Logo} alt='pic'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Uberbar