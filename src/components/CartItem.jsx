import React from 'react';
import {useDispatch} from 'react-redux'
import { generateQuantityOptions, formatPrice} from '../utils';
import {removeCartItem, editCartItem} from '../redux/cart/cartSlice';

const CartItem = ({item}) => {
  const {image, title, company, productColor, quantity, price, cartItemID} = item;
  const dispatch = useDispatch();
  return (
    <article className='mb-4'>
        <div className='grid grid-cols-4 place-items-center py-2'>
            <img src={image} className={`h-24 w-24 object-cover rounded-lg`} alt={title} />
            <div>
                <h2 className='text-lg capitalize'>{title}</h2>
                <h3 className='capitalize'>{company}</h3>
                <div className='text-md flex items-center gap-x-2'>color: <span style={{backgroundColor:productColor}} className='inline-block font-bold h-4 w-4 rounded-full'></span></div>
            </div>
            <div>
              <div>
                <label htmlFor="amount">Amount</label>
                <select className='select select-xs' value={quantity} onChange={(event)=>dispatch(editCartItem({cartItemID,quantity:(event.target.value) }))}>
                  {
                    generateQuantityOptions(20)
                  }
                </select>
              </div>
                <button type='button' className='mt-2 btn btn-xs' onClick={()=>dispatch(removeCartItem({cartItemID}))}>remove</button>
            </div>
            <p>{formatPrice(price*quantity)}</p>
        </div>
    </article>
  )
}

export default CartItem