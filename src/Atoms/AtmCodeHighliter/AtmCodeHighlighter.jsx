import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const AtmCodeHighlighter = ({ codeString }) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={stackoverflowLight}
      showLineNumbers
      wrapLines
      wrapLongLines
    >
      {codeString}
    </SyntaxHighlighter>
  )
}

export default AtmCodeHighlighter
