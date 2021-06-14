import React from 'react'
import classes from './PagPortfolio.module.css'
import TmpMainAndAside from '../Templates/TmpMainAndAside/TmpMainAndAside'
import OrgPersonalInfo from '../Organisms/OrgPersonalInfo/OrgPersonalInfo'
import TmpTopPanel from '../Templates/TmpTopPanel/TmpTopPanel'

const PagPortfolio = () => {
  return (
    <div className={classes.wrapper}>
      <TmpTopPanel />
      <TmpMainAndAside />
    </div>
  )
}

export default PagPortfolio
