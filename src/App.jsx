import React from 'react';
import  {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {HomeLayout, Login,Landing,  Register, Products,About, Cart, Error, Orders, Checkout} from './pages';

const router = createBrowserRouter (
  [
    {
      path:'/',
      element:<HomeLayout/>,
      errorElement:<Error/>,

      children:[
        {
          index: true,
          element: <Landing />
        },
        {
          path:'/cart',
          element: <Cart />,
          errorElement:<Error />
        },
        {
          path: 'products',
          element:<Products />,
          errorElement:<Error />
        },
        {
          path: 'orders',
          element: <Orders />,
          errorElement: <Error />
        },
        {
          path: 'checkout',
          element: <Checkout />,
          errorElement: <Checkout />
        },
        {
          path:'about',
          element:<About/>,
          errorElement:<Error/>
        },
      ]
    },
    {
      path:'login',
      element:<Login/>,
      errorElement:<Error/>
    },
    {
      path:'register',
      element:<Register/>,
      errorElement:<Error/>
    },
    {
      path: '*',
      element:<Error />
    }
  ])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
