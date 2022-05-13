import React from 'react'
import '../Navbar/navbar.css'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <span className='nav-logo'>VisuaLink</span>
        <div className='search-container'>
            <SearchIcon className='nav-search-icon'/>
            <form action="">
                <input className='nav-input' type="text" />
            </form>
        </div>
        <div className='nav-buttons'>
            <button className='btn'>Signup</button>
            <button className='btn'>Login</button>
        </div>
    </div>
  )
}

export default Navbar