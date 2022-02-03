import React from 'react'
import PropTypes from 'prop-types'
import './DateCommand.scss'
import { Command } from '../../models/command'

interface DateProp {
  command: Command
  onResponce: Function
}

function DateCommand(prop: DateProp) {

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  const buttons = []
  let num = 1
  for (let i = new Date(prop.command.data).getDay(); num <= 5; i++) {
    if (days[i % 7] !== 'Sunday' && days[i % 7] !== 'Saturday') {
      buttons.push(days[i % 7])
      num ++
    }
  }

  return (
    <div className="date-wrapper">
      <label>Please Select a day in future : </label> 
      {buttons.map(button => {
        return <button key={button} type="button" onClick={e => prop.onResponce(button)}  > { button } </button>
      })}
    </div>
  )
}

DateCommand.propTypes = {
  command: PropTypes.object.isRequired,
  onResponce: PropTypes.func.isRequired,
}

export default DateCommand
