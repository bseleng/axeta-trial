import React, { useRef, useState } from 'react'
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
                           deleteIcon,
                           setDeleteIcon,
                           deleteIconRef,
                         }) => {
  const [tempSkill, setTempSkill] = useState('+')


  const addSkill = (value) => {
    setSkills((skills) => [...skills, { text: value, duration: '0' }])
    setTempSkill('+')
  }

  const handleClick = (e) => {
    const oldTarget = deleteIcon
    const fullId = e.target.id
    const numId = parseInt(fullId.substring(fullId.indexOf('-') + 1))

    if (oldTarget === numId) {
      setDeleteIcon(null)
      const tempSkills = [...skills]
      tempSkills.splice(numId, 1)
      setSkills([...tempSkills])
    } else {
      setDeleteIcon(numId)
    }
  }

  return (
    <div
      className={classes.wrapper}
    >
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
          <span role='img' aria-label='english emoji'>
            &#127468;&#127463;&nbsp;
          </span>
          English
        </div>
        <div className={classes.skillWrapper}>
          {skills.map((skill, index) => {
            return (
              <div>
                <span
                  key={`skill-${index}`}
                  id={`skill-${index}`}
                  className={classes.skillName}
                  onClick={handleClick}
                >
                  {skill.text}
                </span>
                {deleteIcon === index
                  ?
                  <span
                    className={classes.deleteIcon}
                    ref={deleteIconRef}
                  >
                    <AiFillCloseCircle />
                  </span>
                  :
                  null

                }

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
