import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../UserContext'
import Header from './Header'

export default function Home () {
    const { userInfo, setUserInfo } = useContext(UserContext)

    const navigate = useNavigate()

    const handleLogout = (event) => {
        event.preventDefault()
        setUserInfo({...userInfo, username: '', password: '', lastLogIn: ''})
        navigate('/')
    }

    return (
        <div className="home-page">

            <h1 className="welcome-title">Welcome back {userInfo.username}!</h1>

            <h3 className="lastlogin-title">Your last login was {userInfo.lastLogIn}</h3>

            <button onClick={handleLogout} className='logout-button'>Logout</button>

        </div>

    )
}