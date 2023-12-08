import React from 'react';
import {SearchFilterProducts, ProductsContainer, PaginationContainer} from '../components'
import {customFetch} from  '../utils';

export const loader = async({request}) => {
  const queryParamValues = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // const params= new URL(request.url).searchParams;
  
  console.log('paramsin products loader :', queryParamValues)
  const url = '/products';
  try {
    const response = await customFetch(url,{
      params:queryParamValues
    });
    console.log('reponse for filtered products :', response.data.data)
    const {data:products, meta} = response.data;
    return {products,queryParamValues, meta};
  }
  catch(error) {
    toast.error(error?.data?.error?.message)
  }
}

const Products = () => {
  return (
    <>
      <SearchFilterProducts />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products