import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import {formatPrice} from '../utils';

const ProductsGrid = () => {
    const {products, meta} = useLoaderData();
  return (
    <div>
        { products.map((product ) => {
            const {image, company, title, price } = product.attributes;
            return (
                <Link to='/' className='px-4 py-4 mt-2'>
                  <div className='grid grid-cols-12'>
                    <img  src={image} className='col-span-3 h-24 w-24 object-cover rounded-lg hover:scale-125 duration-300' />
                    <div className='col-span-6'>
                        <h2>{title}</h2>
                        <h3>{company}</h3>
                    </div>
                    <h3 className='col-span-3'>{formatPrice(price)}</h3>
                  </div>
               </Link>
            )
        })
    }
    </div>
  )
}

export default ProductsGrid;