import React from 'react'
import PropTypes from 'prop-types'
import './Complete.scss'
import { Command } from '../../models/command'

interface CompleteProp {
  command: Command
  onResponce: Function
}

function Complete(prop: CompleteProp) {

  return (
    <div className="complete-wrapper">
      <label>Would you like to close the conversation : </label> 
      <button type="button" onClick={e => prop.onResponce('yes')}  > Yes </button>
      <button type="button" onClick={e => prop.onResponce('no')}  > No </button>
    </div>
  )
}

Complete.propTypes = {
  command: PropTypes.object.isRequired,
  onResponce: PropTypes.func.isRequired,
}

export default Complete
