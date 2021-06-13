export const AxInputDynamicStyles = (inputTargetStyle, classes, showError) => {
  if (!showError) {
    switch (inputTargetStyle) {
      case 'name':
        return {
          input: `${classes.input} ${classes.inputBiggest}`,
        }
    }
  } else {
    switch (inputTargetStyle) {
      case 'name':
        return {
          input: `${classes.inputError} ${classes.inputBiggest}`,
          errorMessage: `${classes.errorMessage}`,
        }
    }
  }
}
