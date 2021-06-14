import React from 'react'
import classes from './PagPortfolio.module.css'
import TmpMainAndAside from '../Templates/TmpMainAndAside/TmpMainAndAside'
import OrgTopPanel from '../Organisms/OrgTopPanel/OrgTopPanel'

const PagPortfolio = () => {
  return (
    <div className={classes.wrapper}>
      <OrgTopPanel />
      <TmpMainAndAside />
    </div>
  )
}

export default PagPortfolio
