import React from 'react'
import '../Navbar/navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <span className='nav-logo'>VisuaLink</span>
        <form action="">
            <input className='nav-input' type="text" />
        </form>
        <div className='nav-buttons'>
            <button className='btn'>Signup</button>
            <button className='btn'>Login</button>
        </div>
    </div>
  )
}

export default Navbar