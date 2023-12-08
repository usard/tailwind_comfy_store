import React from 'react';
import {Link, useLoaderData } from 'react-router-dom';
import {formatPrice} from '../utils'

const ProductsList = () => {
    const {products, meta} = useLoaderData();
    console.log('products in products list component :', products)
    return (
        <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {
            products.map((product, index)=> {
              console.log('products attributes :', product.attributes)
            const {price, title, image, company } = product.attributes;
            return (
              <Link key={index} className='card shadow-xl' to={`/products/${product.id}`}>
                <figure className='px-4 pt-4'>
                    <img className='rounded-xl h-64 md:h-48 w-full object-cover' src={image} />
                </figure>
                <div className='card-body text-center'>
                    <h2 className='capitalize font-bold text-xl'>{title}</h2>
                    <p>{formatPrice(price)}</p>
                </div>
              </Link>     
            )
          })
        }
        </div>
  )
}

export default ProductsList;