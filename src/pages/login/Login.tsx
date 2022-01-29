import React, { FormEvent, useState } from 'react'
import PropTypes from 'prop-types'
import './Login.css'

interface Credentials {
  username: string
  password: string
}

async function loginUser(credentials: Credentials) {
  return {
    token: `tokenFor${credentials.username}using${credentials.password}`
  }
}

interface LoginProp {
  setToken: Function
}

function Login(prop: LoginProp) {

  const [error, setError] = useState<string>()
  const [username, setUserName] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username && password) {
      const token = await loginUser({
        username,
        password,
      })
      prop.setToken(token)
    } else setError('Plese enter the username and password')
  }

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      {error!}
      <span> </span>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login
