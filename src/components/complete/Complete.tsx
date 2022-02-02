import React from 'react'
import PropTypes from 'prop-types'
import './Complete.scss'
import { Command } from '../../models/command'

interface CompleteProp {
  command: Command
}

function Complete(prop: CompleteProp) {
  return (
    <div className="complete-wrapper">
      Complete Command
    </div>
  )
}

Complete.propTypes = {
  command: PropTypes.object.isRequired
}

export default Complete
