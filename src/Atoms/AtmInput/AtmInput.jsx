import React, { useEffect, useRef, useState } from 'react'
import validateAll from './AtmInputValidation'
import classes from './AtmInput.module.css'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { AxInputDynamicStyles } from './AxInputDynamicStyles'
import AxAddYears from './AxAddYears'

const AtmInput = ({
  id,
  value,
  setValue,
  validationRules,
  placeholder,
  actionOnEdit,
  inputTargetStyle,
  addItem,
  index,
  updateDuration,
  reorderSkills,
}) => {
  const [showInput, setShowInput] = useState(false)
  const [showDiv, setShowDiv] = useState(true)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('Unknown Error!')
  const inputRef = useRef()
  const dynamicClasses = AxInputDynamicStyles(
    inputTargetStyle,
    classes,
    showError
  )

  const toggleVisibility = () => {
    if (showError) {
      setShowDiv(false)
      setShowInput(true)
    } else {
      setShowDiv(!showDiv)
      setShowInput(!showInput)
    }

    if (reorderSkills && !showDiv) {
      reorderSkills()
    }
  }

  const handleKeys = (e) => {
    if (e.charCode === 13) {
      toggleVisibility()
    }
  }

  const handleInputChange = (e) => {
    if (updateDuration) {
      setValue(e.target.value)
      updateDuration(index, e.target.value)
    } else {
      setValue(e.target.value)
    }
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
        case 'clear':
          inputRef.current.value = ''
          inputRef.current.focus()
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

  useEffect(() => {
    if (addItem && showDiv && value !== '+') {
      addItem(value)
    }
  }, [showDiv])

  return (
    <div className={` ${dynamicClasses.wrapper}`}>
      {showInput && (
        <>
          <input
            id={id}
            ref={inputRef}
            value={value}
            onInput={handleInputChange}
            onBlur={toggleVisibility}
            onKeyPress={handleKeys}
            placeholder={placeholder}
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
        <div id={id} className={` ${dynamicClasses.div}`} onClick={toggleVisibility}>
          {value}
          <AxAddYears value={value} inputTargetStyle={inputTargetStyle} />
        </div>
      )}
      {showError && (
        <div className={` ${dynamicClasses.error}`}> {errorMessage} </div>
      )}
    </div>
  )
}

export default AtmInput
