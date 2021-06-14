import React from 'react'
import classes from './OrgTopPanel.module.css'
import AtmAvatar from '../../Atoms/AtmAvatar/AtmAvatar'
import AtmInput from '../../Atoms/AtmInput/AtmInput'

const OrgTopPanel = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
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
        <AtmInput
          value={'Protland, Oregon, USA'}
          placeholder={'City'}
          // setValue={setValue}
          validationRules={{
            notEmpty: true,
            noSpecials: true,
          }}
          actionOnEdit={'select'}
          inputTargetStyle={'location'}
        />
        <div> &#127468;&#127463; English</div>
      </div>
    </div>
  )
}

export default OrgTopPanel
