import React from 'react'

const FormInput = ({label, defaultValue}) => {
  return (
    <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <input type="text" defaultValue={defaultValue} className="input input-bordered" />
    </div>
  )
}

export default FormInput;