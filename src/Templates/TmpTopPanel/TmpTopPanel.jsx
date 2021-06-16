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
      <AtmPrintBtn/>
    </div>
  )
}
export default TmpTopPanel
