import React from 'react'
import classes from './AtmPrintBtn.module.css'
import { AiFillPrinter } from 'react-icons/ai'

const AtmPrintBtn = () => {

  const handlePrint = () => {
    window.print()
  }
  return (
    <span
      onClick={handlePrint}
      className={classes.btn}
    >
      <AiFillPrinter />
    </span>
  )
}
export default AtmPrintBtn

