import React from 'react'
import classes from './TmpMainAnsAside.module.css'
import OrgMain from '../../Organisms/OrgMain/OrgMain'
import OrgAside from '../../Organisms/OrgAside/OrgAside'

const TmpMainAndAside = ({ skills, setSkills, location }) => {
  return (
    <div className={classes.wrapper}>
      <OrgMain skills={skills} setSkills={setSkills} />
      <OrgAside location={location}/>
    </div>
  )
}
export default TmpMainAndAside
