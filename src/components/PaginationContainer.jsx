import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {generatePaginationNumbers} from '../utils'


const PaginationContainer = () => {
    const {meta} = useLoaderData();
    const {pagination:{page, pageCount}} = meta;
    const pagesArray = generatePaginationNumbers(pageCount);
    console.log('array ?:', pagesArray)
    if(pageCount <= 1) {
      return null
    }
  return (
    <div className='mt-16 flex items-center justify-end join'>
        <button className='btn btn-xs  join-item' type='button'>Prev</button>
        <span>
            { pagesArray.map((val, index)=> {
                return <button key={index} className={  val === page? `btn btn-xs btn-active join-item`: `btn btn-xs join-item` }>{val}</button>
            })
            }
        </span>
        <button className='btn btn-xs join-item' type='button'>Next</button>
    </div>
  )
}

export default PaginationContainer