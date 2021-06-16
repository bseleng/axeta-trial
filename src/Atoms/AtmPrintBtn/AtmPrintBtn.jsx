import React from 'react'
import classes from './AtmPrintBtn.module.css'
import { AiFillPrinter } from 'react-icons/ai'

const AtmPrintBtn = () => {
  const handlePrint = () => {
    window.print()
  }
  return (
    <div className={classes.wrapper} onClick={handlePrint}>
      <AiFillPrinter className={classes.icon} />
      <span>Print this page</span>
    </div>
  )
}
export default AtmPrintBtn
