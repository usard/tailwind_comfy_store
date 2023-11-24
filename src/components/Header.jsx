import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    
    <header className='bg-neutral text-neutral-content py-2'>
        <div id='header' className='align-element text-sm flex gap-x-4 link link-hover justify-center md:justify-end'>
           <NavLink to='/login'>Sign in / Guest</NavLink>
           <NavLink to='/register'>Create Account</NavLink>
        </div>
    </header>
  )
}

export default Header;