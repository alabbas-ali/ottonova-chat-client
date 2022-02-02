import React, { FormEvent, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Socket } from 'socket.io-client'
import stringHash from '@sindresorhus/string-hash'
import './Messages.scss'
import DateCommand from '../date/DateCommand'
import Complete from '../complete/Complete'
import Rate from '../rate/Rate'
import Map from '../map/Map'

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

enum CommandType {
  Date = 'date',
  Map = 'map',
  Rate = 'rate',
  Complete = 'complete',
}

interface Command {
  type: CommandType,
  data: string,
}

function Messages(prop: MessagesProp) {
  const [messages, setMessages] = useState<MessageCollection>({})
  const [command, setCommand] = useState<Command | null>(null)
  const [value, setValue] = useState<string>('')

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
    sendMessage(value)
    setValue('')
    prop.socket.emit('command', {})
  }

  /**
   * runder the coresponding component that responce to the last recived command from the server
   * @param type 
   * @returns 
   */
  const renderCommandComponent = (type: CommandType | undefined) => {
    console.log('type : ', type)
    switch (type) {
      case CommandType.Date:
        return <DateCommand ></DateCommand>
      case CommandType.Map:
        return <Map ></Map>
      case CommandType.Rate:
        return <Rate ></Rate>
      case CommandType.Complete:
        return <Complete ></Complete>
      default:
        return <></>
    }
  }

  return (
    <>
      <div className="message-list">
        {(Object.values<MessageWithTime>(messages)
          .sort((a: MessageWithTime, b: MessageWithTime) => a.time.getTime() - b.time.getTime())
          .map((message: MessageWithTime) => (
            <div
              key={message.key}
              className="message-container"
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              <span className="date">{new Date(message.time).toLocaleTimeString()} : </span>
              <span className="message">{message.message}</span>
            </div>
          ))
        )}
      </div>
      <div>
        {renderCommandComponent(command?.type)}
      </div>
      <form onSubmit={submitForm}>
        <input
          autoFocus
          value={value}
          placeholder="Type your message"
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </>
  )
}

Messages.propTypes = {
  username: PropTypes.string.isRequired,
  socket: PropTypes.object.isRequired,
}

export default Messages
