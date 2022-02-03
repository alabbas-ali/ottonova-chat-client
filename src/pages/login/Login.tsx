import React, { FormEvent, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Avatar,
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

import { loginUser } from '../../services/loginSerive'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

interface LoginProp {
  setToken: Function
}

function Login(prop: LoginProp) {

  const [error, setError] = useState<string>()
  const [username, setUserName] = useState<string>()
  const [password, setPassword] = useState<string>()

  const classes = useStyles()

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error ?
          <Typography component="h1" variant="h5">
            {error}
          </Typography>
          : <></>
        }

        <form onSubmit={handleSubmit} className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            onChange={(e: { target: { value: React.SetStateAction<string | undefined> } }) => setUserName(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e: { target: { value: React.SetStateAction<string | undefined> } }) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login
