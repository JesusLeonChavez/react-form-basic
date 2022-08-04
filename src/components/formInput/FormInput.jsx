import React from 'react'
import "./formInput.css"

const FormInput = (props) => {
  return (
    <div className="formInput">
        {/* <label>UserName</label> */}
        <input
            name={props.name} 
            placeholder={props.placeholder} 
            // onChange={e => props.setUsername(e.target.value)}
        />
    </div>
  )
}

export default FormInput