import React from 'react'
import classes from './TmpTopPanel.module.css'
import OrgPersonalInfo from '../../Organisms/OrgPersonalInfo/OrgPersonalInfo'

const TmpTopPanel = ({
  userName,
  setUserName,
  location,
  setLocation,
  skills,
  setSkills,
  deleteIcon,
  setDeleteIcon,
  deleteIconRef
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
        deleteIcon={deleteIcon}
        setDeleteIcon={setDeleteIcon}
        deleteIconRef={deleteIconRef}
      />
    </div>
  )
}
export default TmpTopPanel
