import React from 'react';
import {useSelector} from 'react-redux';
import { redirect, Form} from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import {SectionTitle,CheckoutForm, CartTotal} from '../components';


export const loader = (store) => () => {
  const user = store.getState().user.user;
  if (user == null) {
    console.log(' incheckout loader :', user)
    return  redirect('/login');
  }
  return null;
}
export const action = (store) => async({request}) => {
  const formData = await request.formData();
  const {name, address} =  Object.fromEntries(formData);  
  const {cartItems, chargeTotal, orderTotal, numCartItems} = store.getState().cart;
  const userToken = store.getState().user.user.token;
  const orderData = {name, address, cartItems, numItemsInCart: numCartItems, chargeTotal: orderTotal, orderTotal:formatPrice(orderTotal)}
  // console.log('form data for checkout :')
  try{
    const response = await customFetch.post('/orders', {data:orderData}, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });
    toast.success('order placed!');
    return redirect('/orders')
  }
  catch(error) {
    console.log('error while checkout server :', error)
    toast.error(error.response.data.error.message)
  }
  if(response.status === 401 || 403) {
    return redirect('/login');
  }
  return null;
}

const Checkout = () => {
  // const user = useSelector((store)=> store.user.user);
  const cartItems = useSelector((store)=> store.cart.cartItems);
  if(!cartItems.length) 
    return ( 
             <div className='h-screen'>
                <SectionTitle text='no items in the cart' />
             </div>
           ) 
  return (
    <div>
      <SectionTitle text='place your order' />
      <div className='grid grid-cols-3 gap-x-10 mt-14'>
        <div  className='col-span-2  px-44'>
          <CheckoutForm />
        </div>
        <div>
          <CartTotal  className='col-span-1'/>
        </div>
      </div>
    </div>
  )
}

export default Checkout;