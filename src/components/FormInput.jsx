import React from 'react'

const FormInput = ({type,name, label, defaultValue, placeholder, value, size}) => {
  console.log('default value :',defaultValue)
  return (
    <div className="form-control">
        <label htmlFor={label} className="label">
            <span className="label-text">{label}</span>
        </label>
        <input type={type} name={name} placeholder={placeholder} defaultValue={defaultValue}  className={`input input-bordered ${size}`} />
    </div>
  )
}

export default FormInput;