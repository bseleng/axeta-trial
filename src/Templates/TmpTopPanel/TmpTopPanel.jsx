import React from 'react'
import classes from './TmpTopPanel.module.css'
import OrgPersonalInfo from '../../Organisms/OrgPersonalInfo/OrgPersonalInfo'

const TmpTopPanel = ({ userName, setUserName, location, setLocation }) => {
  return (
    <div className={classes.wrapper}>
      <OrgPersonalInfo
        userName={userName}
        setUserName={setUserName}
        location={location}
        setLocation={setLocation}
      />
    </div>
  )
}
export default TmpTopPanel
