import React from 'react'
import classes from './TmpMainAnsAside.module.css'
import OrgMain from '../../Organisms/OrgMain/OrgMain'
import OrgAside from '../../Organisms/OrgAside/OrgAside'

const TmpMainAndAside = () => {
  return (
    <div className={classes.wrapper}>
      <OrgMain />
      <OrgAside />
    </div>
  )
}
export default TmpMainAndAside
