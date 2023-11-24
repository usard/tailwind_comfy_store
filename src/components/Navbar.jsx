import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import {BsSunFill, BsMoonFill} from 'react-icons/bs';
import NavLinks from '../components/NavLinks'


const Navbar = () => {
  const [theme, setTheme] = useState('winter');
  const handleTheme = () => {
    const newTheme = theme === 'winter' ? 'dracula': 'winter'
    document.documentElement.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
  }
  return (
    <nav className='bg-base-200'>
        <div className='navbar align-element'>
            <div className='navbar-start'>
                <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>C</NavLink>
             {/* DROPDOWNS */}
             <div className="dropdown">
                <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                <FaBarsStaggered className='h-8 w-8'></FaBarsStaggered>
                </label>
                <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3'>
                   <NavLinks />
                </ul>
             </div>
            </div>
            <div className="navbar-center hidden md:block">
              <ul className='flex gap-x-6'>
                 <NavLinks></NavLinks>
              </ul>
            </div>
            <div className="navbar-end">
              <label  className='swap swap-on '>
                <input type="checkbox"  onChange={handleTheme} />
                <BsSunFill className='swap-on'></BsSunFill>
                <BsMoonFill className='swap-off'></BsMoonFill>
              </label>
              <NavLink to='/cart' className='btn'><FaShoppingCart className='h-6 w-6' /></NavLink>
            </div>
        </div>

    </nav>
  )
}

export default Navbar