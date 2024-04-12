import React, {useId} from 'react';
 // Import useId hook from @reach/auto-id

const Input = React.forwardRef(({ label, type, placeholder, ...props }, ref) => {
    const id = useId();
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                ref={ref} // Forward the ref to the input element
                {...props} // Spread any additional props
            />
        </div>
    );
});

export default Input;
