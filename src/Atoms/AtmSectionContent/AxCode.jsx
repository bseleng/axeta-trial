import React from 'react'
import AtmCodeHighlighter from '../AtmCodeHighliter/AtmCodeHighlighter'

const AxCode = ({ classes, content }) => {
  return content.map((el, index) => {
    return (
      <div className={classes.code} key={`code-${index}`}>
        <AtmCodeHighlighter codeString={el.text} className={classes.code} />
      </div>
    )
  })
}

export default AxCode
