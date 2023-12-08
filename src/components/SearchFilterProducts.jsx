import React from 'react';
import {FormInput, Select,FormRange} from '../components';
import { Form, useLoaderData, useNavigate } from 'react-router-dom';
const SearchFilterProducts = () => {
  const navigate = useNavigate();
  const {products, queryParamValues,meta} = useLoaderData();
  const {search, price, category, company, order } = queryParamValues;
  console.log('query param values  :', meta)
  const categoryOptions=meta.categories;
  const companyOptions = meta.companies;
  const sortOptions=['a-z','z-a','low', 'high'];
  const itemsPriceList = products.map((item)=> item.attributes.price)
  console.log('price list :', itemsPriceList)
  const min = Math.min.apply(null,itemsPriceList);
  const max = Math.max.apply(null,itemsPriceList);

  const resetFilters = () => {
    return navigate('/products')
  }
  return (

   <Form method='GET' >
      <div className='px-4 py-8 grid items-center gap-x-3 gap-y-4   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <FormInput 
            type='search'
            name='search'
            label='search'
            placeholder='type here'
            size='input-sm w-full'
            defaultValue={search}
        />
        <Select 
            name='category'
            labelText='select category'
            options={categoryOptions}
            size='select-sm'
            defaultValue={category}
           
        />
        <Select 
            name='company'
            labelText='select company'
            options={companyOptions}
            size='select-sm'
            defaultValue={company}
        />
        <Select 
            name='order'
            labelText='sort by'
            options={sortOptions} 
            size='select-sm'  
            defaultValue={order}
        />
        {/* <FormRange
          type='range'
          name='price'
          label='price'
          size='input-sm'
          min={min}
          max={max}
          defaultValue={max}
          // value={price}
        /> */}
        <button type='submit' className='btn btn-primary btn-md w-full capitalize'>search</button>
        <button type='button' className='btn btn-secondary capitalize' onClick={resetFilters}>reset</button>
      </div>
   </Form>
  )
}

export default SearchFilterProducts