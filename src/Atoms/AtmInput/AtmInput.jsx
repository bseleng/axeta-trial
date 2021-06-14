import React, { useEffect, useRef, useState } from 'react'
import validateAll from './AtmInputValidation'
import classes from './AtmInput.module.css'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { AxInputDynamicStyles } from './AxInputDynamicStyles'
import AxAddYears from './AxAddYears'

const AtmInput = ({ value, setValue, validationRules, placeholder, actionOnEdit, inputTargetStyle }) => {
  const [showInput, setShowInput] = useState(false)
  const [showDiv, setShowDiv] = useState(true)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Unknown Error!')
  const inputRef = useRef()
  const dynamicClasses = AxInputDynamicStyles(inputTargetStyle, classes, showError)

  const toggleVisibility = () => {
    if (!showError) {
      setShowDiv(!showDiv)
      setShowInput(!showInput)
    }
  }

  const handleKeys = (e) => {
    if (e.charCode === 13) {
      toggleVisibility()
    }
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const focusInput = () => {
    if (showInput) {
      switch (actionOnEdit) {
        case 'focus':
          inputRef.current.focus()
          break
        case 'select':
          inputRef.current.select()
          break
        default:
          return
      }
    }
  }

  useEffect(() => {
    focusInput()
  }, [showInput])

  useEffect(() => {
    validateAll(value, validationRules, setShowError, setErrorMessage)
  }, [value])

  return (
    <div className={classes.wrapper}>
      {showInput && (
        <>
          <input
            ref={inputRef}
            value={value}
            onInput={handleInputChange}
            onBlur={toggleVisibility}
            onKeyPress={handleKeys}
            placeholder={placeholder}
            // className={`${classes.input} ${classes[inputSizeStyle]}`}
            className={`${dynamicClasses.input}`}
          />
          {!showError ? (
            <i className={`${classes.icon} ${classes.iconOk}`}>
              <AiFillCheckCircle />
            </i>
          ) : (
            <i className={`${classes.icon} ${classes.iconNo}`}>
              <AiFillCloseCircle />
            </i>
          )}
        </>
      )}
      {showDiv && (
        <div className={` ${dynamicClasses.div}`} onClick={toggleVisibility}>
          {value}
          <AxAddYears value={value} inputTargetStyle={inputTargetStyle} />
        </div>
      )}
      {showError && <div className={`${classes.errorMessage} `}> {errorMessage} </div>}
    </div>
  )
}

export default AtmInput
