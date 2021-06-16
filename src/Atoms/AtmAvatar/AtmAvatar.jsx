import React, { useRef, useState } from 'react'
import { RiRefreshFill } from 'react-icons/ri'
import classes from './AtmAvatar.module.css'
import defaultPic from '../../Assets/Images/defaultPic.jpg'

const AtmAvatar = ({ avatar = defaultPic }) => {
  const [file, setFile] = useState(null)
  const [showIcon, setShowIcon] = useState(false)
  const fileRef = useRef()

  const handleUpload = () => {
    if (fileRef.current.files && fileRef.current.files[0]) {
      setFile(fileRef.current.files[0])
    }
  }

  return (
    <div>
      <label htmlFor="image_uploads" onClick={handleUpload}>
        <input
          ref={fileRef}
          onChange={handleUpload}
          type={'file'}
          accept="image/*"
          className={classes.input}
          id={'image_uploads'}
        />
        <img
          src={file ? URL.createObjectURL(file) : avatar}
          alt="profile picture"
          onMouseOver={() => setShowIcon(true)}
          onMouseOut={() => setShowIcon(false)}
          className={classes.img}
        />
        <i
          className={classes.icon}
          style={{ visibility: showIcon ? 'visible' : 'hidden' }}
        >
          <RiRefreshFill />
        </i>
      </label>
    </div>
  )
}
export default AtmAvatar
