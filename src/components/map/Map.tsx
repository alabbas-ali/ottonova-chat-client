import React from 'react'
//import PropTypes from 'prop-types'
import './Map.scss'

interface MapProp {
  //username: string
}

function Map(prop: MapProp) {
  return (
    <div className="map-wrapper">
      Map Command
    </div>
  )
}

Map.propTypes = {
  //username: PropTypes.string.isRequired
}

export default Map
