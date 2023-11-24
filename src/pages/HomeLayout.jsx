import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
const HomeLayout = () => {
  return (
    <>
    {/* <div className='text-3xl text-primary'>HomeLayout</div> */}
    <Header></Header>
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default HomeLayout