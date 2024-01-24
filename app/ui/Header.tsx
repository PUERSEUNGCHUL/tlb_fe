import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import Link from 'next/link';
const Header = () => {
  return (
    <header className='flex justify-between items-center p-2 top_header'>
        <div>
          <MenuIcon className='cursor-pointer'/>
        </div>
        <div>
          <p className='logo'><Link href="/">THE LABYRINTH</Link></p>
        </div>
        <div>
          <SearchIcon/>
        </div>
      </header>
  )
}

export default Header