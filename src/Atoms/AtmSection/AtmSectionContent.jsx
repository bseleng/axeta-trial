import React from 'react'
import classes from './AtmSectionContent.module.css'
import AtmInput from '../AtmInput/AtmInput'

const AtmSectionContent = ({ type, content }) => {
  const output = () => {
    switch (type) {
      case 'portfolio':
        return content.map((el) => {
          return (
            <div className={classes.linkWrapper}>
              <span>&#8211;</span>
              <a className={classes.portfolioLink} href={el.link}>
                {el.text}
              </a>
            </div>
          )
        })

      case 'experience':
        return content.map((el) => {
          return (
            <div className={classes.linkWrapper}>
              <span>&#8211;</span>
              <span className={classes.experienceName}>{el.text}</span>
              <AtmInput
                value={el.duration}
                placeholder={1}
                // setValue={setValue}
                validationRules={{
                  notEmpty: true,
                  onlyDigits: true,
                }}
                actionOnEdit={'focus'}
                inputTargetStyle={'skillDuration'}
              />
            </div>
          )
        })
    }
  }

  return <>{output()}</>
}

export default AtmSectionContent
