import React from 'react';
import { Form } from 'react-router-dom';
import {FormInput, SubmitBtn} from '../components';

const CheckoutForm = () => {
    const inputData = [
                        {
                         id:1, 
                         label:'first name', 
                         name:'name', 
                         defaultValue:'', 
                         type:'text'
                        }, 
                        {
                         id:2, 
                         label:'address', 
                         name:'address', 
                         defaultValue:'', 
                         type:'text'
                        }
                      ];
  return (
    <>
    <Form method='POST'>
        {
            inputData.map((row,index)=> {
                return <FormInput key={index} {...row}/>
            })
        } 
        <div className='mt-3'>
          <SubmitBtn text='order now'/>
        </div>
    </Form>
    </>
  )
}

export default CheckoutForm