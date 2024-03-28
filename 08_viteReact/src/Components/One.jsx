import React from 'react'
import Two from './Two'

function One() {
    return (
        <>
        <Two />
        <div>first component</div>
        </>
    )
}

export default One;
// from this example we can see that the props is not accessed by Three.jsx instead of nesting hence we have to pass props to both one and two and threeif props was provided by App.jsx