import React from 'react'

const AxPlainText = ({ classes, content }) => {
  return content.map((el, index) => {
    return (
      // <div className={classes.plainTextWrapper}>
      <div key={`plainText-${index}`}>
        <span className={classes.plainText}>{el.text}</span>
        <span className={classes.plainText}>{el.separator}</span>
      </div>
      // </div>
    )
  })
}

export default AxPlainText
