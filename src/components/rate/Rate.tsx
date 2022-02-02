import React from 'react'
import PropTypes from 'prop-types'

import { Command } from '../../models/command'

import StarRating from './StarRating'

import './Rate.scss'

interface RateProp {
  command: Command
}

function Rate(prop: RateProp) {

  return (
    <div className="rate-wrapper">
      <label>Please rate your experience : </label> 
      <StarRating />
    </div>
  )
}

Rate.propTypes = {
  command: PropTypes.object.isRequired
}

export default Rate
