import React, { useId } from 'react'


function Input({
    label,
    type,
    placeholder,
    ...props
},ref) {
    const id = useId()
    return (
        <div>
          {label && <label className='' htmlFor={id} >
            {label}</label>}  

          <input 
          type = {type} 
          id={id}
          ref = {ref}
           ></input>
        </div>
    )
}

export default React.forwardRef(Input)
