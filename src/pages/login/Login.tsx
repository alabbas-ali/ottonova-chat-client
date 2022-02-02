import React, { FormEvent, useState } from 'react'
import PropTypes from 'prop-types'

import './Login.scss'

interface Credentials {
  username: string
  password: string
}

/**
 * this function is a replacment of server side creating a JWT token for the user 
 * @param credentials 
 * @returns 
 */
async function loginUser(credentials: Credentials) {
  const HMACSHA256 = (stringToSign: string, secret: string) => "not_implemented"

  // The header typically consists of two parts: 
  // the type of the token, which is JWT, and the signing algorithm being used, 
  // such as HMAC SHA256 or RSA.
  const header = {
    "alg": "HS256",
    "typ": "JWT",
    "kid": "vpaas-magic-cookie-1fc542a3e4414a44b2611668195e2bfe/4f4910"
  }
  const encodedHeaders = btoa(JSON.stringify(header))


  // The second part of the token is the payload, which contains the claims.
  // Claims are statements about an entity (typically, the user) and 
  // additional data. There are three types of claims: 
  // registered, public, and private claims.
  const claims = {
    username: credentials.username,
    role: "user",
  }
  const encodedPlayload = btoa(JSON.stringify(claims))


  // create the signature part you have to take the encoded header, 
  // the encoded payload, a secret, the algorithm specified in the header, 
  // and sign that.
  const signature = HMACSHA256(`${encodedHeaders}.${encodedPlayload}`, "mysecret")
  const encodedSignature = btoa(signature)

  const jwtToken = `${encodedHeaders}.${encodedPlayload}.${encodedSignature}`
  return {
    token: jwtToken
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
