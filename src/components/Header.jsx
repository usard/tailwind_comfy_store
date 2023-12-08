import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom';
import { logoutUser } from '../redux/user/userSlice';
import {clearCart} from '../redux/cart/cartSlice';
import { useQueryClient } from '@tanstack/react-query';


const Header = () => {
  const queryClient = useQueryClient();
  const user = useSelector((store)=> store.user).user
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/')
    dispatch(clearCart())  
    dispatch(logoutUser());
    queryClient.removeQueries();
  }
  console.log('header user from store :', user);
  return (
    
    <header className='bg-neutral text-neutral-content py-2'>
        <div id='header' className='align-element text-sm flex gap-x-4 link link-hover justify-center md:justify-end'>
          {
            user? <span className='flex items-center gap-x-5'>
                    <p className='capitalize'>{`Hello, ${user.username}`}</p> 
                    <button type='button'  onClick={()=>handleLogout()}>Logout</button>
                  </span> 
                  :
                  <span className='flex gap-x-5 items-center'>
                    <NavLink to='/login'>Sign in / Guest</NavLink>
                    <NavLink to='/register'>Create Account</NavLink>
                  </span>
          }
        </div>
    </header>
  )
}

export default Header;