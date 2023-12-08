import React from 'react'

const FormRange = ({label,name,type, min,max, size, defaultValue, value}) => {
  return (
    <div className={`${size}`}>
        <label htmlFor={label}>{label}</label>
        <input type={type} name={name} min={min} max={max} className='w-full'/>
    </div>
  )
}

export default FormRange