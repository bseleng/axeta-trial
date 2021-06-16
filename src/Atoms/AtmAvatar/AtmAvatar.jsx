import React, { useRef, useState } from 'react'
import { RiRefreshFill } from 'react-icons/ri'
import classes from './AtmAvatar.module.css'
import defaultPic from '../../Assets/Images/defaultPic.jpg'

const AtmAvatar = ({ avatar = defaultPic }) => {
  const [allowEdit, setAllowEdit] = useState(false)
  const [file, setFile] = useState(null)
  const fileRef = useRef()


  const handleClick = () => {
      setAllowEdit(true)
  }

  const handleUpload = () => {
    if (fileRef.current.files && fileRef.current.files[0])
      setFile(fileRef.current.files[0])
    setAllowEdit(false)
  }

  return (
    <div>
      <label htmlFor='image_uploads'>
        <input
          ref={fileRef}
          onChange={handleUpload}
          onInput={handleClick}
          type={'file'}
          disabled={!allowEdit}
          accept='image/*'
          className={classes.input}
          id={'image_uploads'}
        />
        <img
          src={file ? URL.createObjectURL(file) : avatar}
          alt='profile picture'
          onClick={handleClick}
          className={classes.img}
        />
        <i className={classes.icon} style={{ visibility: !allowEdit ? 'hidden' : 'visible' }}>
          <RiRefreshFill />
        </i>
      </label>
    </div>
  )
}
export default AtmAvatar
