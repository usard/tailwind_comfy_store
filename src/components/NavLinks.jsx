import React from 'react';
import {NavLink} from 'react-router-dom'


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
  return (
  <>
  {
    links.map((link)=> {
        return (<li key={link.id}>
                   <NavLink to={link.url} className='capitalize'>{link.text}</NavLink>
              </li>)
    })
    
  }
  </>
  )
}

export default NavLinks