import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import {SectionTitle, OrdersList, PaginationContainer} from '../components'

const ordersQuery = (userToken)=> {
  return {
    queryKey:['orders'],
    queryFn: () => customFetch('/orders', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      }
    })
  }
}
export const loader = (store, queryClient) => async({request})=> {
  const userToken = store.getState().user.user.token;
  console.log('usertoken :', userToken);
  const params =  Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  try {
    const response =  await queryClient.ensureQueryData(ordersQuery(userToken))
    toast.success(response.data);
    // queryClient.removeQueries(['orders'])
    return {orders: response.data.data, meta: response.data.meta}
  }
  catch(error) {
   toast.error(error.response)
  }
}

const Orders = () => {
  return (
    <div>
      <SectionTitle text='orders'></SectionTitle>
      <OrdersList></OrdersList>
      <PaginationContainer />
    </div>
  )
}

export default Orders