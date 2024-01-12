import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
const Header = () => {
  return (
    <header className='flex justify-between items-center p-2'>
        <div>
          <MenuIcon/>
        </div>
        <div>
          <p className='logo'>THE LABYRINTH</p>
        </div>
        <div>
          <SearchIcon/>
        </div>
      </header>
  )
}

export default Header