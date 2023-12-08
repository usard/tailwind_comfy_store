import React from 'react'
import {Link, Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import FormInput from '../components/FormInput';
import SubmitBtn from '../components/SubmitBtn';

export const action = async({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log('form data :', data)
  try {
      const response = await customFetch.post('/auth/local/register', data);
      toast.success('user registered successfully'); 
      return redirect('/login');
  }
  catch(error) {
    toast.error(error.response.data.error.message)
    console.log( 'error occured while signup :', error);
  }
  return null;  
}

const Register = () => {

  const data = [
    {id:1, label:'username', name:'username', type:'text'},
    {id:2, label: 'email', name:'email', type:'email'}, 
    {id:3, label: 'password', name: 'password', type:'password'},
  ]
  return (
    <main className='h-screen grid place-items-center'>
      <Form  method='POST' className='w-96 p-8 shadow-lg bg-base-100'>
        <h1 className='text-center text-3xl font-bold'>Register</h1>
        <div>
          {
            data.map((item)=> {
              return <FormInput key = {item.id} {...item}></FormInput>
            })
          } 
        </div>
        <div className='mt-4'>
          <SubmitBtn width='block' color='primary' text={'Register'}></SubmitBtn>
          <p >Already a member? <Link to='/login'>login</Link></p>
        </div>
      </Form>
    </main>
  )
}

export default Register