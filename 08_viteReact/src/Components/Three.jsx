import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'


function Three() {
    const {user} = useContext(UserContext)
    if(!user) return <div>blank</div>
    return   <div>My name is {user.name}</div>

}

export default Three
// Three does not read prop in App directly thats why useContext is used
