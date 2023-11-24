import React from 'react'
import FormInput from '../components/FormInput'
import { Link, useNavigation } from 'react-router-dom'


const Login = () => {
  const navigation = useNavigation();
  const data = [
                 {id:1, label: 'Name', name:'email', defaultValue:'',  type:'email'}, 
                 {id:2, label: 'Email', name: 'password', defaultValue:'', type:'password'}
               ]
  return (
    <main className='h-screen grid place-items-center'>
      <form className='card w-96 p-8 bg-base-100 shadow-lg'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <div className='mt-8'>
          {
            data.map((item)=> {
              return <FormInput {...item} />
            })
          }
        </div>
        <div >
          <button className='btn btn-primary btn-block mt-4' type='submit'> submit</button>
        </div>
        <button className='btn btn-secondary btn-block mt-2' type='button'>guest user</button>
        <p className='text-center mt-1'>Not a member yet? <Link className='text-primary link link-hover' to='/register'>Register</Link></p>
      </form>
     
      
    </main>
  )
}

export default Login