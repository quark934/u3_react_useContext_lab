import React, { useState, useContext } from 'react'
import UserContext from '../UserContext'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const { userInfo, setUserInfo } = useContext(UserContext)
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const navigate = useNavigate()

    const handleUsernameChange = (event) => {
        setUsernameInput(event.target.value)
    }
    
    const handlePasswordChange = (event) => {
        setPasswordInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(usernameInput !== '' && passwordInput !== '') {
            setUserInfo({...userInfo, username: usernameInput, password: passwordInput, lastLogIn: moment().format('MMMM Do YYYY, h:mm:ss a')})
            setUsernameInput('')
            setPasswordInput('')
            navigate('/Home')
        } else {
            alert(`You didn't input a username or password, dumbass.`)
            setUsernameInput('')
            setPasswordInput('')
        }
    }

    return (
        <div className="login-page">
            <h1 className="login-title">Please Log In</h1>
            <form action="">
                <input type="text" placeholder="Username" value={usernameInput} onChange={handleUsernameChange} className="username-input"/>
                <input type="password" placeholder="Password" value={passwordInput} onChange={handlePasswordChange} className="password-input"/>
                <button type="submit" onClick={handleSubmit} className='submit-button'>Submit</button>
            </form>
            {/* <div className="login-info">
                <h3>Username:</h3>
                <p>{userInfo.username}</p>
                <h3>Password:</h3>
                <p>{userInfo.password}</p>
                <h3>Last Login:</h3>
                <p>{userInfo.lastLogIn}</p>
            </div> */}
        </div>
    )
}