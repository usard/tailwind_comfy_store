import React, {useState} from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import { toast } from 'react-toastify';
import {customFetch, formatPrice, generateQuantityOptions } from '../utils';
import { addCartItem } from '../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const singleProductQuery = (params) => {
  return {
    queryKey:[`product/${params.cv}`],
    queryFn:() =>  customFetch(`products/${params.cv}`)
  }
}
export const loader = (queryClient) => async({params}) => {
    // console.log('params :', params)
    const response = await queryClient.ensureQueryData(singleProductQuery(params)) 
    const product = response.data.data;
  return product;
}

const SingleProduct = () => {
  console.log('items in the cart:', useSelector(store => store.cart.cartItems));
  console.log('cart details :', useSelector((store)=> store.cart));
  const product = useLoaderData();
  const dispatch = useDispatch();
  console.log('product attributes :', product.attributes)
  const {title, company, image, price, colors} = product.attributes; 
  const [productColor, setProductColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const cartProduct = {
    cartItemID: product.id + productColor,
    productID: product.id,
    image,
    title,
    company,
    quantity,
    productColor,
    price
  }
  const handleCart = ()=> {
    dispatch(addCartItem({product:cartProduct}));
    toast.success('item added to the cart!')
  }

  return (
   <section className='align-element'>
    <div className='text-md breadcrumbs'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
    </div>
    <div className='grid py-5 lg:grid-cols-2 gap-x-8'>
      <img src={image} alt={title} className='px-4 h-96 w-96 object-cover' />
      <div className='mt-4 product-description'>
        <h1 className='pt-2 text-3xl font-bold capitalize'>{title}</h1>
        <h2 className='pt-1 capitalize text-xl font-bold text-gray-400'>{company}</h2>
        <span className='inline-block pt-1 font-bold text-xl'>{formatPrice(price)}</span>
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, perferendis? Quae unde modi incidunt reiciendis aperiam, laborum saepe, eius temporibus earum repellat ratione nostrum eveniet distinctio praesentium fugiat et atque.</p>
          <div className='mt-4'>
           <h4 className='font-medium text-2xl'>colors</h4>
           <div className='mt-2'>
              {
                colors.map((color) => {
                  return  <button  key={color} onClick={()=>{setProductColor(color);setQuantity(1)}} type='button' style={{backgroundColor: color}} className={`badge h-6 w-6 mr-1 ${color === productColor && 'border-secondary border-2'}`} ></button>
                })
              }
           </div>
          </div>
          <div className='mt-4'>
            <label htmlFor="Amount" className='text-xl font-medium capitalize'><h4>quantity</h4></label>
            <select name="quantity" id="quantity" onChange={(e)=>setQuantity(e.target.value)} className='mt-1 select select-md select-secondary border-secondary w-full max-w-xs' value={quantity}>
             {generateQuantityOptions(20)}
            </select>
          </div>
         <button type='button' className='mt-4 btn btn-secondary btn-md' onClick={handleCart}>ADD TO BAG</button>
      </div>
    </div>
   </section>
  )
}

export default SingleProduct;