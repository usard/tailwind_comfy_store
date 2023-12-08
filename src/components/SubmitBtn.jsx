import React from 'react';
import {useNavigation} from 'react-router-dom'

const SubmitBtn = ({text, color, width}) => {
    const navigate = useNavigation();
    const isSubmitting = navigate.state === 'submitting'
  return (
        <button className='btn btn-secondary w-full' type='submit'>{ isSubmitting ? <><span className='loading loading-spinner'></span></>: text || 'submit'}</button>
  )
}

export default SubmitBtn;