import React from 'react'

const Select = ({name, labelText, options,defaultValue,value, size}) => {
  return (
    <div className='form-control'>
        <label htmlFor={name}>{labelText}</label>
        <select name={name} id={name} defaultValue={defaultValue} className={`select select-bordered ${size}`}>
         {
            options.map((option, index)=> {
                return <option key={index} value={option}>{option}</option>
            })
         }
        </select>
    </div>
  )
}

export default Select