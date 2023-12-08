import React from 'react';
import { useLoaderData } from 'react-router-dom';
import dayjs from 'dayjs';


const OrdersList = () => {
    const {orders, meta} = useLoaderData();
    console.log('orders data from server :', orders)
  return (
    <div>
        <h1 className='capitalize text-lg'>total orders : {} </h1>
      <table className='table'>
        <thead className='text-lg'>
         <tr>
           <th>name</th>
           <th>address</th>
           <th>products</th>
           <th>price</th>
           <th>date</th>
         </tr>
        </thead>
        <tbody>
          {
             orders.map((order,index)=> {
                const {name, address, cartItems: products, orderTotal: price, createdAt} = order.attributes;
                return <tr key={order.id} className='mt-2' >
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{products.length}</td>
                    <td>{price} </td>
                    <td>{dayjs(createdAt).format('hh:mm a - MMM DD YYYY')}</td>
                </tr>
             })
          }
        </tbody>
      </table>
    </div>
  )
}

export default OrdersList