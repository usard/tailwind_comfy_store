import React from 'react';
import  {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { HomeLayout, Login, Landing, Register, Products, About, Cart, Error, Orders, Checkout, SingleProduct } from './pages';
import store from './store';
// loaders
import {loader as landingLoader} from './pages/Landing';
import {loader as singleProductLoader} from './pages/SingleProduct';
import {loader as productsLoader} from './pages/Products';
import {loader as checkoutLoader} from './pages/Checkout';
import {loader as ordersLoader} from './pages/Orders';
// actions
import {action as registerAction } from './pages/Register';
import {action as loginAction} from './pages/Login';
import {action as checkoutAction} from './pages/Checkout';



const queryClient= new QueryClient({
   defaultOptions: {
    queries: {
      staleTime: 1000*60*5
    }
   }
})



const router = createBrowserRouter (
  [
    {
      path:'/',
      element:<HomeLayout/>,
      // errorElement:<Error/>,
      children:[
        {
          index: true,
          element: <Landing />,
          loader: landingLoader(queryClient),
        },
        {
          path:'/cart',
          element: <Cart />,
          errorElement:<Error />
        },
        {
          path: 'products',
          element:<Products />,
          loader: productsLoader,
          // errorElement:<Error />,
        },
        {
          path: 'products/:cv',
          element: <SingleProduct/>,
          loader: singleProductLoader(queryClient),
          errorElement:<Error />
        },
        {
          path: 'orders',
          element: <Orders />,
          errorElement: <Error />,
          loader: ordersLoader(store, queryClient),
        },
        {
          path: 'checkout',
          element: <Checkout />,
          // errorElement: <Checkout />,
          loader: checkoutLoader(store),
          action: checkoutAction(store),
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
      errorElement:<Error/>,
      action: loginAction(store)
    },
    {
      path:'register',
      element:<Register/>,
      errorElement:<Error/>,
      action:registerAction,
    },
    {
      path: '*',
      element:<Error />
    }
  ])

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App
