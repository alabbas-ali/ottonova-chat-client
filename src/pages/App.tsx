import React from 'react'
import Login from './login/Login'
import useToken from './../utils/useToken'
import Chat from './chat/Chat'

function App() {
  const { token, setToken } = useToken()

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Chat token={token}></Chat>
  )
}

export default App
