import React, { useState } from 'react'
import classes from './PagPortfolio.module.css'
import TmpMainAndAside from '../Templates/TmpMainAndAside/TmpMainAndAside'
import TmpTopPanel from '../Templates/TmpTopPanel/TmpTopPanel'

const PagPortfolio = () => {
  const [userName, setUserName] = useState('John Smith')
  const [location, setLocation] = useState('Portland, Oregon, USA')

  const [skills, setSkills] = useState([
    { text: 'PHP', duration: '6' },
    { text: 'Ruby', duration: '2' },
    { text: 'JavaScript', duration: '4.5' },
  ])

  return (
    <div className={classes.wrapper}>
      <TmpTopPanel
        userName={userName}
        setUserName={setUserName}
        location={location}
        setLocation={setLocation}
        skills={skills}
        setSkills={setSkills}
      />
      <TmpMainAndAside />
    </div>
  )
}

export default PagPortfolio
