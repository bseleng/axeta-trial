import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useDebounce } from 'use-debounce'

const apiKey = process.env.REACT_APP_MAP_API

const containerStyle = {
  width: '552px',
  height: '200px',
}

const AtmMap = ({ location }) => {
  const [deboucedLocation] = useDebounce(location, 1500)
  const [center, setCenter] = useState({
    lat: 45.5051064, lng: -122.6750261,
  })

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const geocode = () => {
    const encodedLocation = encodeURI(location)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}&key=${apiKey}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCenter(data.results[0].geometry.location)
      })
  }

  useEffect(() => {
    geocode()
  }, [deboucedLocation])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <>
        <Marker position={center} />
      </>
    </GoogleMap>
  ) : <></>
}

export default React.memo(AtmMap)