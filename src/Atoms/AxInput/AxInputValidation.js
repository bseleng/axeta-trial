const validateEmpty = (value, setShowError, setErrorMessage) => {
  if (value === '') {
    setShowError(true)
    setErrorMessage('Cannot be empty!')
  } else {
    setErrorMessage('Unknown Error!')
    setShowError(false)
  }
}

const validateDigits = (value, setShowError, setErrorMessage) => {
  const regLong = /^\d*\.?\d$/
  const reg = /^\d*\.?\d*$/
  const regComma = /\,/

  if (!value.match(regLong)) {
    setShowError(true)
    setErrorMessage('Only one digit after decimal is allowed!')
  }
  if (!value.match(reg)) {
    setShowError(true)
    setErrorMessage('Only digits are allowed!')
  }
  if (value.match(regComma)) {
    setShowError(true)
    setErrorMessage('Try . instead of ,')
  }
}

const validateSpecial = (value, setShowError, setErrorMessage) => {
  const reg = /[!@#$%^&*()_+="'`~?.,:;№<>[\]{}|\/\-]§€µ/
  if (value.match(reg)) {
    setShowError(true)
    setErrorMessage('Special characters are not allowed!')
  }
}

const validateAll = (value, validationRules, setShowError, setErrorMessage) => {
  if (validationRules.notEmpty) {
    validateEmpty(value, setShowError, setErrorMessage)
  }

  if (validationRules.onlyDigits) {
    validateDigits(value, setShowError, setErrorMessage)
  }

  if (validationRules.noSpecials) {
    validateSpecial(value, setShowError, setErrorMessage)
  }
}

export default validateAll
