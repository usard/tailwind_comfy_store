import React from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';


const links = [
 {
    id:1,
    url:'/', 
    text:'home'
 }, 
 {
    id:2,
    url:'about',
    text:'about'
 },
 {
    id:3,
    url:'products',
    text: 'products'
 }, 
 {
    id:4,
    url:'checkout',
    text: 'checkout'
 },
 {
    id:5,
    url: 'orders',
    text: 'orders'
 },
 {
    id:6,
    url: 'cart',
    text: 'cart'
 }

]
const NavLinks = () => {
   const user = useSelector((store)=> store.user.user)
  return (
  <>
  {
    links.map((link)=> {
      if ((link.url === 'checkout' || link.url === 'orders') && !user)
         return null;
      else
        return (<li key={link.id}>
                   <NavLink to={link.url} className='capitalize'>{link.text}</NavLink>
              </li>)
    })
    
  }
  </>
  )
}

export default NavLinks