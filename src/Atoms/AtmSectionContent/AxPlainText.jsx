import React from 'react'

const AxPlainText = ({ classes, content }) => {
  return content.map((el) => {
    return (
      // <div className={classes.plainTextWrapper}>
      <>
        <span className={classes.plainText}>{el.text}</span>
        <span className={classes.plainText}>{el.separator}</span>
      </>
      // </div>
    )
  })
}

export default AxPlainText
