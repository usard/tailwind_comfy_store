import React from 'react';
import {useNavigation} from 'react-router-dom'

const SubmitBtn = ({text, color, width}) => {
    const navigate = useNavigation();
    const isSubmitting = navigate.state === 'submitting'
  return (
        <button type='submit'>{ isSubmitting ? <><span className='loading loading-spinner'></span></>: text || 'submit'}</button>
  )
}

export default SubmitBtn;