import React from 'react'
import classes from './OrgPersonalInfo.module.css'
import AtmAvatar from '../../Atoms/AtmAvatar/AtmAvatar'
import AtmInput from '../../Atoms/AtmInput/AtmInput'

const OrgPersonalInfo = ({
  userName,
  setUserName,
  location,
  setLocation,
  skills,
  setSkills,
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <AtmAvatar />
      </div>
      <div>
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
        <div>
          <span role="img" aria-label="english emoji">
            &#127468;&#127463;&nbsp;
          </span>
          English
        </div>
        <div>
          {skills.map((skill) => {
            return <span>{skill.text}</span>
          })}
        </div>
      </div>
    </div>
  )
}

export default OrgPersonalInfo
