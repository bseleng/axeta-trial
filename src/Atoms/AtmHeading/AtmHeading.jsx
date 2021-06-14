import React from 'react'
import classes from './AtmHeading.module.css'

const AtmHeading = ({ text }) => {
  return <h3 className={classes.text}>{text}</h3>
}

export default AtmHeading
