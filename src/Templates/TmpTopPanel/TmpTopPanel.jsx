import React from 'react'
import classes from './TmpTopPanel.module.css'
import OrgPersonalInfo from '../../Organisms/OrgPersonalInfo/OrgPersonalInfo'

const TmpTopPanel = () => {
  return (
    <div className={classes.wrapper}>
      <OrgPersonalInfo />
    </div>
  )
}
export default TmpTopPanel
