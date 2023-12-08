import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {Loading} from '../components'
const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading  = navigation.state === 'loading'
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <section className='align-element'>
      {
       isLoading ? <Loading /> : <Outlet />
      }
    </section>
    </>
  )
}

export default HomeLayout