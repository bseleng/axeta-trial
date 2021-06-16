import React from 'react'
import classes from './TmpTopPanel.module.css'
import OrgPersonalInfo from '../../Organisms/OrgPersonalInfo/OrgPersonalInfo'
import AtmPrintBtn from '../../Atoms/AtmPrintBtn/AtmPrintBtn'

const TmpTopPanel = ({
  userName,
  setUserName,
  location,
  setLocation,
  skills,
  setSkills,
}) => {
  return (
    <div className={classes.wrapper}>
      <OrgPersonalInfo
        userName={userName}
        setUserName={setUserName}
        location={location}
        setLocation={setLocation}
        skills={skills}
        setSkills={setSkills}
      />
      <AtmPrintBtn />
    </div>
  )
}
export default TmpTopPanel
