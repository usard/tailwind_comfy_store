import React from 'react';
import {useSelector} from 'react-redux';
import {SectionTitle, CartItemsList, CartTotal} from './../components';
import { Link } from 'react-router-dom';


const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.cartItems);
  const user = useSelector((store)=> store.user.user)
  if(!cartItems.length) 
    return <div> <SectionTitle text='your cart is empty'/></div> 
  else 
  return (
    <>
      <SectionTitle  className='capitalize text-2xl' text='shopping cart'></SectionTitle>
      <div className='grid lg:grid-cols-12 col-span-12 gap-x-4'>
        <div className='col-span-8 mt-8' >
          <CartItemsList />
        </div>
        <div className='col-span-4'>
          <CartTotal /> 
          <Link className='btn btn-secondary w-full capitalize mt-2' to={ user? `/checkout`: `/login`}> {user ? 'proceed to checkout': 'proceed to login'} </Link>
        </div>
      </div>
    </>
  )
}

export default Cart;