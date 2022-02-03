import React from 'react'
import PropTypes from 'prop-types'
import './Complete.scss'
import { Command } from '../../models/command'

interface CompleteProp {
  command: Command
  onResponce: Function
}

function Complete(prop: CompleteProp) {

  const sendResponce = (answer: string) => {
    console.info(`day : ${answer} is selected`)
    prop.onResponce(answer)
  }

  return (
    <div className="complete-wrapper">
      <label>Would you like to close the conversation : </label> 
      <button type="button" onClick={e => sendResponce('yes')}  > Yes </button>
      <button type="button" onClick={e => sendResponce('no')}  > No </button>
    </div>
  )
}

Complete.propTypes = {
  command: PropTypes.object.isRequired,
  onResponce: PropTypes.func.isRequired,
}

export default Complete
