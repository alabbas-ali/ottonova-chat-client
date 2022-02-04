import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Command } from '../../models/command'
import { makeStyles } from '@material-ui/core'
import { sharedStyle } from '../../utils/sharedStyle'

const useStyles = makeStyles(() => ({
  stareButton: {
    border: 'none',
    fontSize: '25px',
  }
}))

interface RateProp {
  command: Command
  onResponce: Function
}

function Rate(prop: RateProp) {

  const rating = 0
  const [hover, setHover] = useState(0)

  const classes = useStyles()
  const sharedClasses = sharedStyle()

  return (
    <div className={sharedClasses.message}>
      <div className={sharedClasses.resivedMessage}>
        <span className={sharedClasses.messageAuthor} style={{ left: '0' }} > </span>
        <span>Please rate your experience : <br />
          {[...Array(5)].map((_star, index) => {
            index += 1
            return (
              <button
                type="button"
                key={index}
                className={classes.stareButton}
                style={index <= (hover || rating) ? { color: '#3f51b5' } : { color: '#ccc' }}
                onClick={() => prop.onResponce(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span>&#9733;</span>
              </button>
            )
          })}
        </span>
      </div>
    </div>
  )
}

Rate.propTypes = {
  command: PropTypes.object.isRequired,
  onResponce: PropTypes.func.isRequired,
}

export default Rate
