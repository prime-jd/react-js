import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import authService from '../../appWrite/Auth'

function Header() {
    const authStatus = useSelector((state)=> state.auth.status)
    const navigate = useNavigate()
    return (
       <></> 
    )
}

export default Header
