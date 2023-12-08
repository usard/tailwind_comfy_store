import React, {useState} from 'react';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import ProductsList from './ProductsList';
import ProductsGrid from './ProductsGrid';

{/* <BsGrid3X3GapFill /> */}


const ProductsContainer = () => {
  const [view, setView] = useState('list');
  return (
    <div>
        <div className='flex justify-between items-center'>
          <h2> {22} products </h2> 
          <div className='flex gap-3'>
            <button type='button' className={`text-2xl ${view==='grid'? 'active':''}`} onClick={()=>setView('grid')}>
              {<BsGrid3X3GapFill />}
            </button>
            <button type='button' className={`text-2xl ${view==='list'? 'active':''}`} onClick={()=>setView('list')}>
              {<BsList />}
            </button>
          </div>
        </div>
        <div>
          { (view==='grid') ? <ProductsList /> : <ProductsGrid /> }
        </div>
    </div>
  )
}

export default ProductsContainer