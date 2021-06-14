import React from 'react'
import classes from './TmpTopPanel.module.css'
import OrgPersonalInfo from '../../Organisms/OrgPersonalInfo/OrgPersonalInfo'

const TmpTopPanel = ({ userName, setUserName }) => {
  return (
    <div className={classes.wrapper}>
      <OrgPersonalInfo userName={userName} setUserName={setUserName} />
    </div>
  )
}
export default TmpTopPanel
