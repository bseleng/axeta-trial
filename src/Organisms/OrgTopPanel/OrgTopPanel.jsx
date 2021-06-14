import React from 'react'
import classes from './OrgTopPanel.module.css'
import AtmAvatar from '../../Atoms/AtmAvatar/AtmAvatar'
import AtmInput from '../../Atoms/AtmInput/AtmInput'

const OrgTopPanel = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <AtmAvatar />
      </div>
      <div>
        <AtmInput
          value={'John Smith'}
          placeholder={'Name Surname'}
          // setValue={setValue}
          validationRules={{
            notEmpty: true,
            noSpecials: true,
          }}
          actionOnEdit={'focus'}
          inputTargetStyle={'name'}
        />
      </div>
    </div>
  )
}

export default OrgTopPanel
