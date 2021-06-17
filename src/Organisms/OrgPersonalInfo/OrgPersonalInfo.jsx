import React, { useState } from 'react'
import classes from './OrgPersonalInfo.module.css'
import AtmAvatar from '../../Atoms/AtmAvatar/AtmAvatar'
import AtmInput from '../../Atoms/AtmInput/AtmInput'
import { AiFillCloseCircle } from 'react-icons/ai'

const OrgPersonalInfo = ({
  userName,
  setUserName,
  location,
  setLocation,
  skills,
  setSkills,
}) => {
  const [tempSkill, setTempSkill] = useState('+')
  const [deleteIcon, setDeleteIcon] = useState(null)

  const addSkill = (value) => {
    setSkills((skills) => [...skills, { text: value, duration: '0' }])
    setTempSkill('+')
  }

  const getSkillId = (e) => {
    const fullId = e.target.id
    return parseInt(fullId.substring(fullId.indexOf('-') + 1))
  }

  const handleHover = (e) => {
    setDeleteIcon(getSkillId(e))
  }

  const handleClick = (e) => {
    const tempSkills = [...skills]
    tempSkills.splice(getSkillId(e), 1)
    setSkills([...tempSkills])
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <AtmAvatar />
      </div>
      <div className={classes.infoWrapper}>
        <AtmInput
          value={userName}
          placeholder={'Name Surname'}
          setValue={setUserName}
          validationRules={{
            notEmpty: true,
            noSpecials: true,
          }}
          actionOnEdit={'focus'}
          inputTargetStyle={'name'}
        />
        <AtmInput
          id={'address'}
          value={location}
          placeholder={'City, Country'}
          setValue={setLocation}
          validationRules={{
            notEmpty: true,
            noSpecials: true,
          }}
          actionOnEdit={'select'}
          inputTargetStyle={'location'}
        />
        <div className={classes.language}>
          <span role="img" aria-label="english emoji">
            &#127468;&#127463;&nbsp;
          </span>
          English
        </div>
        <div className={classes.skillWrapper}>
          {skills.map((skill, index) => {
            return (
              <div
                key={`skill-${index}`}
                onClick={handleClick}
                onMouseOver={handleHover}
                onMouseOut={() => setDeleteIcon(null)}
                className={classes.skillBlock}
              >
                <span id={`skill-${index}`} className={classes.skillName}>
                  {skill.text}
                </span>
                <span
                  style={{
                    visibility: deleteIcon === index ? 'visible' : 'hidden',
                  }}
                  className={classes.deleteIcon}
                >
                  <AiFillCloseCircle />
                </span>
              </div>
            )
          })}
          <AtmInput
            value={tempSkill}
            validationRules={{ notEmpty: true }}
            actionOnEdit={'clear'}
            placeholder={'Skill'}
            inputTargetStyle={'skillName'}
            setValue={setTempSkill}
            addItem={addSkill}
          />
        </div>
      </div>
    </div>
  )
}

export default OrgPersonalInfo
