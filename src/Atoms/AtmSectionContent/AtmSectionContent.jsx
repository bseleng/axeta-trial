import React from 'react'
import classes from './AtmSectionContent.module.css'
import AxPortfolio from './AxPortfolio'
import AxExperience from './AxExperience'
import AxQuote from './AxQuote'
import AxCode from './AxCode'
import AxPlainText from './AxPlainText'

const AtmSectionContent = ({ type, content }) => {
  const output = () => {
    switch (type) {
      case 'portfolio':
        return <AxPortfolio classes={classes} content={content} />
      case 'experience':
        return <AxExperience classes={classes} content={content} />
      case 'quote':
        return <AxQuote classes={classes} content={content} />
      case 'code':
        return <AxCode classes={classes} content={content} />
      case 'plainText':
        return <AxPlainText classes={classes} content={content} />
    }
  }

  return <>{output()}</>
}

export default AtmSectionContent
