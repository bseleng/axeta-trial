import React from 'react'
import AtmInput from '../AtmInput/AtmInput'

const AxExperience = ({ content, classes }) => {
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

export default AxExperience
