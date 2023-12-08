import React from 'react';
import { useSelector} from 'react-redux';
import {formatPrice} from '../utils';
import {useNavigate, Link} from 'react-router-dom'

const CartTotal = () => {
    const {cartItemsPrice, shippingFee, tax, orderTotal}  = useSelector((store)=> store.cart);
    const navigate = useNavigate();

  return (
    <div>
        <h1 className='capitalize text-2xl '>cart total</h1>
        <div >
            <p className='flex justify-between items-center pb-2'>
               <span>sub total :</span>
               <span>{formatPrice(cartItemsPrice)}</span>
            </p>
            <p className='flex justify-between items-center pb-2'>
              <span>shipping </span>
              <span>{formatPrice(shippingFee)}</span>
            </p>
            <p className='flex justify-between items-center pb-2'>
              <span>tax</span>
              <span>{formatPrice(tax)}</span>
            </p>
            <br />
            <h2 className='text-xl capitalize font-medium'>order total <span>{formatPrice(orderTotal)}</span></h2>
        </div>
    </div>
  )
}

export default CartTotal;