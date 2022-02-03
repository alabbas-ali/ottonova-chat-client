import React, { FormEvent, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Socket } from 'socket.io-client'
import stringHash from '@sindresorhus/string-hash'
import {
  IconButton,
  makeStyles,
  TextField,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import {
  Command,
  CommandType,
} from '../../models/command'
import DateCommand from '../date/DateCommand'
import Complete from '../complete/Complete'
import Rate from '../rate/Rate'
import Map from '../map/Map'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chatContainer: {
    height: '100%',
    display: 'block',
  },
  message: {
    position: 'relative',
    display: 'inline-block',
    margin: '1.5rem 0 0 0',
    transition: '0.5s all',
    listStyle: 'none',
    width: '100%',
  },
  resivedMessage: {
    float: 'left',
    backgroundColor: '#E91E63',
    padding: '0.5rem 1rem',
    color: '#fff',
    borderRadius: '1rem',
    borderBottomLeftRadius: '0.125rem',
  },
  sendMessage: {
    float: 'right',
    backgroundColor: '#ECEFF1',
    padding: '0.5rem 1rem',
    color: '#607D8B',
    borderRadius: '1rem',
    borderBottomRightRadius: '0.125rem',
  },
  messageText: {

  },
  messageAuthor: {
    position: 'absolute',
    color: '#B0BEC5',
    fontSize: '0.675rem',
    top: '0',
    marginTop: '-1rem',
  },
  messageDate: {
    color: '#CFD8DC',
    fontSize: '0.5rem',
    bottom: '-0.35rem',
    display: 'none',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBox: {
    flex: '0 0 88%',
  },
  submit: {
    flex: '0 0 12%',
    margin: theme.spacing(1, 0.8, 1),
  },
}))

interface MessagesProp {
  username: string
  socket: Socket
}

interface Message {
  author: string
  message: string
}

interface MessageWithTime extends Message {
  time: Date
  key: number
}

interface MessageCollection {
  [key: string]: MessageWithTime
}

function Messages(prop: MessagesProp) {
  const [messages, setMessages] = useState<MessageCollection>({})
  const [command, setCommand] = useState<Command | null>(null)
  const [value, setValue] = useState<string>('')

  const classes = useStyles()

  /**
   * this effect sets the message and command listeners for the socket 
   */
  useEffect(() => {

    /**
     * listen to any new message emited by the server
     * add the message to the currect messags list
     * @param message 
     */
    const messageListener = (message: Message) => {
      const time = new Date()
      const messageWithTime: MessageWithTime = {
        author: message.author,
        message: message.message,
        time: time,
        key: stringHash(message.message + time),
      }
      setMessages((prevMessages) => {
        const newMessages: MessageCollection = { ...prevMessages }
        newMessages[messageWithTime.key] = messageWithTime
        return newMessages
      })
    }

    /**
     * listen to any new command emited by the server
     * set the currect command to the last one recived
     * @param message 
     */
    const commandListener = (message: { suthor: string, command: Command }) => {
      setCommand(() => message.command)
    }

    prop.socket.on('message', messageListener)
    prop.socket.on('command', commandListener)

    return () => {
      prop.socket.off('message', messageListener)
      prop.socket.off('command', commandListener)
    };
  }, [prop.socket])

  /**
   * this function create a new message out of the string
   * emit and send this message using the open soket
   * add the message to the currect messags list 
   * @param messages 
   */
  const sendMessage = (messages: string) => {
    const time = new Date()
    const mess: Message = {
      author: prop.username,
      message: messages,
    }
    prop.socket.emit('message', mess)

    const messageWithTime: MessageWithTime = {
      author: mess.author,
      message: mess.message,
      time: time,
      key: stringHash(mess.message + time),
    }

    setMessages((prevMessages) => {
      const newMessages: MessageCollection = { ...prevMessages }
      newMessages[messageWithTime.key] = messageWithTime
      return newMessages
    })

    setCommand(() => null)
  }

  /**
   * submit function of the chat text box 
   * send the last text writen by the user to the server
   * empty the enput text
   * emit an empty command so the user can secive a random commant from the server
   * @param messages 
   */
  const submitForm = (e: FormEvent) => {
    e.preventDefault()
    if (value) {
      sendMessage(value)
      setValue('')
      prop.socket.emit('command', {})
    }
  }

  /**
   * runder the coresponding component that responce to the last recived command from the server
   * @param type 
   * @returns 
   */
  const renderCommandComponent = (command: Command | null) => {
    switch (command?.type) {
      case CommandType.Date:
        return <DateCommand command={command} onResponce={sendMessage}></DateCommand>
      case CommandType.Map:
        return <Map command={command} ></Map>
      case CommandType.Rate:
        return <Rate command={command} onResponce={sendMessage}></Rate>
      case CommandType.Complete:
        return <Complete command={command} onResponce={sendMessage}></Complete>
    }
    return <></>
  }

  return (
    <div className={classes.container}>
      <div className={classes.chatContainer}>
        {(Object.values<MessageWithTime>(messages)
          .sort((a: MessageWithTime, b: MessageWithTime) => a.time.getTime() - b.time.getTime())
          .map((message: MessageWithTime) => (
            <div className={classes.message}>
              <div
                key={message.key}
                className={message.author === prop.username ? classes.resivedMessage : classes.sendMessage}
                title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
              >
                <span 
                  className={classes.messageAuthor} 
                  style={message.author === prop.username ? {left: '0'} : {right: '0'}}
                >
                  {message.author}
                </span>
                <span className={classes.messageText}>{message.message}</span>
                <span className={classes.messageDate}>{new Date(message.time).toLocaleTimeString()}</span>
              </div>
            </div>
          ))
        )}
        {renderCommandComponent(command)}
      </div>

      <form onSubmit={submitForm} className={classes.form}>
        <TextField
          variant="standard"
          margin="normal"
          required
          id="message"
          name="message"
          placeholder="Type your message"
          value={value}
          autoFocus
          className={classes.textBox}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) => setValue(e.target.value)}
        />
        <IconButton
          type="submit"
          color="primary"
          aria-label="send"
          className={classes.submit}
        >
          <SendIcon />
        </IconButton>
      </form>
    </div>
  )
}

Messages.propTypes = {
  username: PropTypes.string.isRequired,
  socket: PropTypes.object.isRequired,
}

export default Messages
