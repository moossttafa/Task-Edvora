import React from 'react'
import "./Modal.css"

function Modal() {
  return (
    <div className='modals'>
      <div className='title'>
        <h3>Filter</h3>
      </div>
        <select>
          <option>City</option> 
        </select>
        <select>
        <option>State</option> 
      </select>
    </div>
  )
}

export default Modal
