import { useState, useContext } from 'react'
import './App.css'
import UserContext from './UserContext'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'


function App() {

  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '', 
    lastLogIn: '' 
  })

  return (
    <div className='App'>
      <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <Routes>
          <Route exact path="/" element = {<Header />}/>
          <Route exact path="/Home" element = {<Home />}/>
        </Routes>
      </UserContext.Provider>

    </div>
  )
}

export default App
