import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
const apiKey = process.env.REACT_APP_MAP_API

const containerStyle = {
  width: '552px',
  height: '200px',
}

const AtmMap = ({ location }) => {

  const [center, setCenter] = useState({
    lat: 40.7222993,
    lng: -73.99590409999999
  })

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

  const geocode = () => {
    const encodedLocation = encodeURI(location)
    console.log(location)
    console.log(encodedLocation)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}&key=${apiKey}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCenter(data.results[0].geometry.location)
        console.log(data.results[0].geometry.location)
      })
  }

  useEffect(() => {
    geocode()
  }, [location])

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