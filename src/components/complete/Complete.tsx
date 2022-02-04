import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

import { Command } from '../../models/command'
import { sharedStyle } from '../../utils/sharedStyle'

interface CompleteProp {
  command: Command
  onResponce: Function
}

function Complete(prop: CompleteProp) {
  const sharedClasses = sharedStyle()

  return (
    <div className={sharedClasses.message}>
      <div className={sharedClasses.resivedMessage}>
        <span className={sharedClasses.messageAuthor} style={{ left: '0' }} > </span>
        <span>Would you like to close the conversation ? <br />
          <Button
            size="small"
            variant="outlined"
            color="primary"
            type="button"
            className={sharedClasses.smallButton}
            onClick={e => prop.onResponce('yes')}
          >
            Yes
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            type="button"
            className={sharedClasses.smallButton}
            onClick={e => prop.onResponce('no')}
          >
            No
          </Button>
        </span>
        <span className={sharedClasses.messageDate}>{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  )
}

Complete.propTypes = {
  command: PropTypes.object.isRequired,
  onResponce: PropTypes.func.isRequired,
}

export default Complete
