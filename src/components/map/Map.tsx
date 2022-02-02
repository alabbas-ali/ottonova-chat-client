import React from 'react'
import PropTypes from 'prop-types'
import './Map.scss'
import { Command } from '../../models/command'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

interface MapProp {
  command: Command
}

function LocationPin(prop: {text: string}) {
  return (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{prop.text}</p>
    </div>
  )
}

function Map(prop: MapProp) {
  return (
    <div className="map-wrapper">
      <label>This is the location selected bu the server : </label>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: '' }}
        defaultCenter={prop.command.data}
        defaultZoom={5}
      >
        <LocationPin
          // lat={prop.command.data.lat}
          // lng={prop.command.data.lng}
          text='Random Location selected by server'
        />
      </GoogleMapReact>
    </div>
  )
}

Map.propTypes = {
  command: PropTypes.object.isRequired
}

export default Map
