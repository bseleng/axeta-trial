import React, { useState } from 'react'
import { RiRefreshFill } from 'react-icons/ri'
import classes from './AtmAvatar.module.css'
import defaultPic from '../../Assets/Images/defaultPic.jpg'

const AtmAvatar = ({ avatar = defaultPic, setAvatar }) => {
  const [allowEdit, setAllowEdit] = useState(false)

  const handleClick = () => {
    setAllowEdit(true)
  }
  return (
    <>
      <label htmlFor="image_uploads">
        <input type={'file'} disabled={!allowEdit} accept="image/*" className={classes.input} id={'image_uploads'} />
        <img src={avatar} alt="profile picture" onClick={handleClick} className={classes.img} />
        {allowEdit ? (
          <span className={classes.icon}>
            <RiRefreshFill />
          </span>
        ) : null}
      </label>
    </>
  )
}
export default AtmAvatar
