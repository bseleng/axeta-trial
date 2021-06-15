import React, { useEffect, useState } from 'react'
import AtmInput from '../AtmInput/AtmInput'

const AxExperience = ({ content, classes, setContent }) => {
  const [tempDuration, setTempDuration] = useState(content[1].duration)

  const updateSkills = (index, value) => {
    const tempContent = [...content]
    tempContent.splice(index, 1, { text: content[index].text, duration: value })
    setContent((content) => [...tempContent])
  }

  const sortSkills = (a, b) => {
    if (parseInt(a.duration) > parseInt(b.duration)) {
      return -1
    }
    if (parseInt(a.duration) < parseInt(b.duration)) {
      return 1
    }
    return 0
  }

  const reorderSkills = () => {
    const sortedSkills = content.sort(sortSkills)
    setContent((content) => [...sortedSkills])
  }

  return content.map((el, index) => {
    return (
      <div className={classes.linkWrapper} key={`experience-${index}`}>
        <span>&#8211;</span>
        <span className={classes.experienceName}>{el.text}</span>
        <AtmInput
          value={el.duration}
          placeholder={'00'}
          setValue={setTempDuration}
          validationRules={{
            notEmpty: true,
            onlyDigits: true,
          }}
          actionOnEdit={'focus'}
          inputTargetStyle={'skillDuration'}
          index={index}
          updateDuration={updateSkills}
          reorderSkills={reorderSkills}
        />
      </div>
    )
  })
}

export default AxExperience
