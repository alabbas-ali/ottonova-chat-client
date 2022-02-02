import React from 'react'
// import PropTypes from 'prop-types'
import './Complete.scss'

interface CompleteProp {
  //username: string
}

function Complete(prop: CompleteProp) {
  return (
    <div className="complete-wrapper">
      Complete Command
    </div>
  )
}

Complete.propTypes = {
  //username: PropTypes.string.isRequired
}

export default Complete
