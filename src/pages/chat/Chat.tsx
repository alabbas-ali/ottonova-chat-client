import React from 'react'
import PropTypes from 'prop-types'
import './Chat.css'

interface ChatProp {
  username: string
}

function Chat(prop: ChatProp) {

  return (
    <div className="chat-wrapper">
      {prop.username}
    </div>
  )
}

Chat.propTypes = {
  username: PropTypes.string.isRequired
}

export default Chat
