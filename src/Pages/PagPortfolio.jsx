import React, { useRef, useState } from 'react'
import classes from './PagPortfolio.module.css'
import TmpMainAndAside from '../Templates/TmpMainAndAside/TmpMainAndAside'
import TmpTopPanel from '../Templates/TmpTopPanel/TmpTopPanel'

const PagPortfolio = () => {
  const [userName, setUserName] = useState('John Smith')
  const [location, setLocation] = useState('Portland, Oregon, USA')
  const [deleteIcon, setDeleteIcon] = useState(null)
  const deleteIconRef = useRef()

  const [skills, setSkills] = useState([
    { text: 'PHP', duration: '6' },
    { text: 'Ruby', duration: '2' },
    { text: 'JavaScript', duration: '4.5' },
  ])

  const removeDeleteIcon = (e) => {
    const isSkill = e.target.id.indexOf('skill-')
    if (isSkill === -1) {
      setDeleteIcon(null)
    }
  }

  return (
    <div
      className={classes.wrapper}
      onClick={removeDeleteIcon}
    >
      <TmpTopPanel
        userName={userName}
        setUserName={setUserName}
        location={location}
        setLocation={setLocation}
        skills={skills}
        setSkills={setSkills}
        deleteIcon={deleteIcon}
        setDeleteIcon={setDeleteIcon}
        deleteIconRef={deleteIconRef}
      />
      <TmpMainAndAside
        skills={skills}
        setSkills={setSkills} />
    </div>
  )
}

export default PagPortfolio
