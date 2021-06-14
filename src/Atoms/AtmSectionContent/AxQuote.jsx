import React from 'react'

const AxQuote = ({ classes, content }) => {
  return content.map((el) => {
    return (
      <div className={classes.quoteWrapper}>
        <span
          className={`${classes.quotationMarks} ${classes.quotationMarksOpen}`}
        >
          &#8220;
        </span>
        <div className={classes.quoteText}> {el.text} </div>
        <span
          className={`${classes.quotationMarks} ${classes.quotationMarksClose}`}
        >
          &#8222;
        </span>
      </div>
    )
  })
}

export default AxQuote
