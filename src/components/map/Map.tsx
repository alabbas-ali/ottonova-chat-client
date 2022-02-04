import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'

import PinDropSharp from '@material-ui/icons/PinDropSharp'


import { Command } from '../../models/command'
import { sharedStyle } from '../../utils/sharedStyle'

const useStyles = makeStyles(() => ({
  mapWrapper: {
    border: 'none',
    position: 'relative',
    height: '200px',
    width: '100%',
    display: 'block',
  },
  pinText: {

  }
}))

interface MapProp {
  command: Command
}

function LocationPin(prop: { text: string, lat: number, lng: number }) {
  const classes = useStyles()
  return (
    <div>
      <PinDropSharp style={{color: '#fffff'}}/>
      <p className={classes.pinText}>{prop.text}</p>
    </div>
  )
}

function Map(prop: MapProp) {
  const sharedClasses = sharedStyle()
  const classes = useStyles()

  return (
    <div className={sharedClasses.message}>
      <div className={sharedClasses.resivedMessage}>
        <span className={sharedClasses.messageAuthor} style={{ left: '0' }} > </span>
        <span>This is the location selected bu the server : <br />
        <br/>
          <div className={classes.mapWrapper}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY ?? '' }}
              defaultCenter={prop.command.data}
              defaultZoom={13}
            >
              <LocationPin
                lat={prop.command.data.lat}
                lng={prop.command.data.lng}
                text='Random Location selected by server'
              />
            </GoogleMapReact>
          </div>
        </span>
      </div>
    </div>
  )
}

Map.propTypes = {
  command: PropTypes.object.isRequired
}

export default Map
