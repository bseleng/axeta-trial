import React from 'react'
import AtmCodeHighlighter from '../AtmCodeHighliter/AtmCodeHighlighter'

const AxCode = ({ classes, content }) => {
  return content.map((el) => {
    return (
      <div className={classes.code}>
        <AtmCodeHighlighter codeString={el.text} className={classes.code} />
      </div>
    )
  })
}

export default AxCode
