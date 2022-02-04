import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

import { Command } from '../../models/command'
import { sharedStyle } from '../../utils/sharedStyle'

interface DateProp {
  command: Command
  onResponce: Function
}

function DateCommand(prop: DateProp) {

  const sharedClasses = sharedStyle()

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
      num++
    }
  }

  return (
    <div className={sharedClasses.message}>
      <div className={sharedClasses.resivedMessage}>
        <span className={sharedClasses.messageAuthor} style={{ left: '0' }} > </span>
        <span>
          Please Select a day in future : <br/>
          {buttons.map(button => {
            return <Button 
              key={button} 
              size="small" 
              variant="outlined" 
              color="primary" 
              type="button"
              className={sharedClasses.smallButton}
              onClick={e => prop.onResponce(button)} 
            > 
              {button} 
            </Button>
          })}
        </span>
        <span className={sharedClasses.messageDate}>{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

DateCommand.propTypes = {
  command: PropTypes.object.isRequired,
  onResponce: PropTypes.func.isRequired,
}

export default DateCommand
