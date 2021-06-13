export const AxInputDynamicStyles = (inputTargetStyle, classes, showError) => {
  if (!showError) {
    switch (inputTargetStyle) {
      case 'name':
        return {
          input: `${classes.input} ${classes.inputBiggest}`,
          div: ` ${classes.inputBiggest}`,
        }
      case 'location':
        return {
          input: `${classes.input} ${classes.inputMedium}`,
          div: ` ${classes.inputMedium}`,
        }
      case 'skillName':
        return {
          input: `${classes.input} ${classes.inputSmaller}`,
          div: ` ${classes.skillName}`,
        }
      case 'skillDuration':
        return {
          input: `${classes.input} ${classes.inputSmallest}`,
          div: ` ${classes.skillDuration}`,
        }
    }
  } else {
    switch (inputTargetStyle) {
      case 'name':
        return {
          input: `${classes.inputError} ${classes.inputBiggest}`,
          errorMessage: `${classes.errorMessage}`,
          div: ` ${classes.inputBiggest}`,
        }
      case 'location':
        return {
          input: `${classes.inputError} ${classes.inputMedium}`,
          errorMessage: `${classes.errorMessage}`,
          div: ` ${classes.inputMedium}`,
        }
      case 'skillName':
        return {
          input: `${classes.inputError} ${classes.inputSmaller}`,
          errorMessage: `${classes.errorMessage}`,
          div: `${classes.skillName}`,
        }
      case 'skillDuration':
        return {
          input: `${classes.input} ${classes.inputSmallest}`,
          errorMessage: `${classes.errorMessage}`,
          div: ` ${classes.skillDuration}`,
        }
    }
  }
}
