import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItemsList = () => {
    const {cartItems:cart_items}  = useSelector((store)=> store.cart);
  return (
    <section>
        {
          cart_items.map((item)=> {
              return <CartItem key={item.cartItemID} item={item} />
          })
        }
    </section>
  )
}

export default CartItemsList