import React, { useState } from 'react'
import LoginForm from './LoginForm'
import SignUp from './SignUp'

function LoginPage({user, setUser}) {
  const [login, setLogin] = useState(true)

  return (
    <div style={{padding: '2%'}}>
        
        {login ? (<LoginForm user={user} setUser={setUser} login={login} setLogin={setLogin}/>) : (<SignUp user={user} setUser={setUser} login={login} setLogin={setLogin}/>)}
        
    </div>
  )
}

export default LoginPage