import React from 'react'
// import PropTypes from 'prop-types'
import './DateCommand.scss'

interface DateProp {
  //username: string
}

function DateCommand(prop: DateProp) {

  return (
    <div className="date-wrapper">
      Date Command
    </div>
  )
}

DateCommand.propTypes = {
  //username: PropTypes.string.isRequired
}

export default DateCommand
