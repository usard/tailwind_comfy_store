import React from 'react'
import { Link, useNavigate, Form, redirect} from 'react-router-dom';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import {customFetch} from '../utils';
import FormInput from '../components/FormInput'
import {loginUser} from '../redux/user/userSlice'



export const action = (store) => async({request}) => {
  // const dispatch = useDispatch();
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local' , data);
    console.log('response for login from server :', response);
    const userData = {...response.data.user, token: response.data.jwt};
    store.dispatch(loginUser({userData}))
    toast.success('login successful')
    return redirect('/');
  }
  catch(error) {
    console.log('error while login :', error)
  }
  return null;
}

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuest = async() => {
    const response = await customFetch.post('/auth/local', { identifier:'test@test.com', password:'secret'});
    try {
      console.log('response from server for guest login :', response.data)
      dispatch(loginUser( { userData: response.data}));
      navigate('/')
    }
    catch(error) {
      console.log('error in guest login :', error);
    }
  }
  // const navigation = useNavigation();
  const data = [
                 {id:1, label: 'email', name:'identifier',  type:'email'}, 
                 {id:2, label: 'password', name: 'password',  type:'password'}
               ]
  return (
    <main className='h-screen grid place-items-center'>
      <Form method='POST' className='card w-96 p-8 bg-base-100 shadow-lg'>
        <h4 className='text-center text-3xl font-bold'>Login</h4>
        <div className='mt-8'>
          {
            data.map((item, index)=> {
              return <FormInput key={index} {...item} />
            })
          }
        </div>
        <div >
          <button className='btn btn-primary btn-block mt-4' type='submit'> submit</button>
        </div>
        <button className='btn btn-secondary btn-block mt-2' type='button' onClick={loginAsGuest}>guest user</button>
        <p className='text-center mt-1'>Not a member yet? <Link className='text-primary link link-hover' to='/register'>Register</Link></p>
      </Form>
    </main>
  )
}

export default Login