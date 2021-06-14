import React, { useState } from 'react'
import classes from './PagPortfolio.module.css'
import TmpMainAndAside from '../Templates/TmpMainAndAside/TmpMainAndAside'
import OrgPersonalInfo from '../Organisms/OrgPersonalInfo/OrgPersonalInfo'
import TmpTopPanel from '../Templates/TmpTopPanel/TmpTopPanel'

const PagPortfolio = () => {
  const [userName, setUserName] = useState('John Smith')
  return (
    <div className={classes.wrapper}>
      <TmpTopPanel userName={userName} setUserName={setUserName} />
      <TmpMainAndAside />
    </div>
  )
}

export default PagPortfolio
