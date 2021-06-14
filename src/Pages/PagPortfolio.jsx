import React, { useState } from 'react'
import classes from './PagPortfolio.module.css'
import TmpMainAndAside from '../Templates/TmpMainAndAside/TmpMainAndAside'
import TmpTopPanel from '../Templates/TmpTopPanel/TmpTopPanel'

const PagPortfolio = () => {
  const [userName, setUserName] = useState('John Smith')
  const [location, setLocation] = useState('Protland, Oregon, USA')
  const [skills, setSkills] = useState([])

  return (
    <div className={classes.wrapper}>
      <TmpTopPanel
        userName={userName}
        setUserName={setUserName}
        location={location}
        setLocation={setLocation}
      />
      <TmpMainAndAside />
    </div>
  )
}

export default PagPortfolio
