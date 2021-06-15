import React, { useEffect, useState } from 'react'
import AtmInput from '../AtmInput/AtmInput'

const AxExperience = ({ content, classes, setContent }) => {
  const [tempDuration, setTempDuration] = useState(content[1].duration)

  const updateSkills = (index, value) => {
    const tempContent = [...content]
    tempContent.splice(index,1, {text: content[index].text, duration: value})
    setContent(content=> tempContent)
  }

  return content.map((el, i) => {
    return (
      <div className={classes.linkWrapper}>
        <span>&#8211;</span>
        <span className={classes.experienceName}>{el.text}</span>
        <AtmInput
          value={el.duration}
          placeholder={1}
          setValue={setTempDuration}
          validationRules={{
            notEmpty: true,
            onlyDigits: true,
          }}
          actionOnEdit={'focus'}
          inputTargetStyle={'skillDuration'}
          index={i}
          updateDuration={updateSkills}
          auxValue={tempDuration}
        />
      </div>
    )
  })
}

export default AxExperience
