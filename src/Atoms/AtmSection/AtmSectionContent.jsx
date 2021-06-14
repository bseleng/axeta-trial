import React from 'react'
import classes from './AtmSectionContent.module.css'

const AtmSectionContent = ({ type, content }) => {
  const output = () => {
    switch (type) {
      case 'portfolio':
        return content.map((el) => {
          console.log(el)
          return (
            <div className={classes.linkWrapper}>
              <span>&#8211; &nbsp;</span>
              <a className={classes.portfolioLink} href={el.link}>
                {el.text}
              </a>
            </div>
          )
        })
    }
  }

  return <>{output()}</>
}

export default AtmSectionContent
