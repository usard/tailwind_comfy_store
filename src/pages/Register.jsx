import React from 'react'
import {Link} from 'react-router-dom'
import FormInput from '../components/FormInput';
import SubmitBtn from '../components/SubmitBtn';

const Register = () => {
  const data = [
    {id:1, label:'Name', name:'name', defaultValue:'', type:'text'},
    {id:2, label: 'Email', name:'email', defaultValue:'',  type:'email'}, 
    {id:3, label: 'Password', name: 'password', defaultValue:'', type:'password'},
  ]
  return (
    <main className='h-screen grid place-items-center'>
      <form  className='w-96 p-8 shadow-lg bg-base-100'>
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
      </form>
    </main>
  )
}

export default Register