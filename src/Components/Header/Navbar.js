import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Uberbar from './Uberbar' 
import './Navbar.css' 
import Modal from '../Card/Modal' 

function Navbar() {
  return ( 
    <Fragment>
      <Uberbar />
      <nav className='Navbar'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <ul>
            <li>
              <NavLink activeClassName='is-active' to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='is-active' to="/pastRides">pastRides</NavLink>
            </li>
            <li>
              <NavLink activeClassName='is-active' to="/upcomingRides">upcomingRides</NavLink>
            </li>
            </ul> 
          <div className='filter'> 
            <button type='submit'>Filters</button>
            <Modal />
          </div>
        </div>
      </div>
      </nav>
    </Fragment>
  )
}

export default Navbar