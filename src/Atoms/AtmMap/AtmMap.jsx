import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
const apiKey = process.env.REACT_APP_MAP_API

const containerStyle = {
  width: '552px',
  height: '200px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

const AtmMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(AtmMap)