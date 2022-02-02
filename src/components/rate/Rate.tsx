import React from 'react'
//import PropTypes from 'prop-types'
import './Rate.scss'

interface RateProp {
  //username: string
}

function Rate(prop: RateProp) {

  return (
    <div className="rate-wrapper">
      Rate Command
    </div>
  )
}

Rate.propTypes = {
  //username: PropTypes.string.isRequired
}

export default Rate
