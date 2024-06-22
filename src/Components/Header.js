import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const togglemenu = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={togglemenu}>
          <i className={isOpen ? 'bi bi-x-lg' : 'bi bi-filter-left'}></i>
        </div>

        <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
          <li><a href='#home'>HOME</a></li>
          <li><a href='#blog'>BLOG</a></li>
          <li><a href='#about'>ABOUT</a></li>
          <li><a href='#contact'>CONTACT</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
