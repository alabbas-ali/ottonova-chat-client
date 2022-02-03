import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import io, { Socket } from 'socket.io-client'
import jwt_decode from 'jwt-decode'
import { Container } from '@material-ui/core'

import Messages from '../../components/messages/Messages'


interface ChatProp {
  token: string
}

function Chat(prop: ChatProp) {

  const [socket, setSocket] = useState<Socket | null>(null)

  useEffect((): any => {
    if (!process.env.REACT_APP_CHAT_SERVER)
      return null
    const newSocket = io(process.env.REACT_APP_CHAT_SERVER)
    setSocket(newSocket);
    return () => newSocket.close()
  }, [setSocket])

  const jsonPayload = jwt_decode<{username: string, role: string}>(prop.token)
  
  return (
    <Container component="main" maxWidth="xs">
      { socket ? (
        <Messages socket={socket} username={jsonPayload.username}/>
      ) : (
        <div>Not Connected</div>
      )}
    </Container>
  )
}

Chat.propTypes = {
  token: PropTypes.string.isRequired,
}

export default Chat
