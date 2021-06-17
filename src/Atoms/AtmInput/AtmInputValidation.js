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
  const regLong = /^\d*\.?\d?$/
  const reg = /^\d*\.?\d*$/
  const regComma = /^\d,\d?/

  if (!value.match(regLong)) {
    setErrorMessage('Only one digit after decimal is allowed!')
    setShowError(true)
  }
  if (value.match(regComma)) {
    setErrorMessage('Try . instead of ,')
    setShowError(true)
  }
  if (!value.match(reg) &&
    !value.match(regLong) &&
    !value.match(regComma)) {
    setErrorMessage('Only digits are allowed!')
    setShowError(true)
  }
}

const validateNegative = (value, setShowError, setErrorMessage) => {
  if (parseInt(value) < 0) {
    setShowError(true)
    setErrorMessage('Negative values are not allowed!')
  }
}

const validateSpecial = (value, setShowError, setErrorMessage) => {
  const reg = /[!@#$%^&*()_+="'`~?:;№<>[\]{}|\/\-§€µ]/
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

  if(validationRules.noNegative) {
    validateNegative(value, setShowError, setErrorMessage)
  }
}

export default validateAll
