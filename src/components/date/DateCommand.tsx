import React from 'react'
import PropTypes from 'prop-types'
import './DateCommand.scss'
import { Command } from '../../models/command'

interface DateProp {
  command: Command
}

function DateCommand(prop: DateProp) {

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const buttons = []
  for (let i = new Date(prop.command.data).getDay(); i< days.length; i++) {
    buttons.push(days[i])
  }

  const sendmessage = (day: string) => {
    console.info(`day : ${day} is selected`)
  }

  return (
    <div className="date-wrapper">
      <label>Please Select a day in future : </label> 
      {buttons.map(button => {
        return <button type="button" onClick={e => sendmessage(button)}  > { button } </button>
      })}
    </div>
  )
}

DateCommand.propTypes = {
  command: PropTypes.object.isRequired
}

export default DateCommand
