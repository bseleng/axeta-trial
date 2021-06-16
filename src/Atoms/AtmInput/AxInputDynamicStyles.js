export const AxInputDynamicStyles = (inputTargetStyle, classes, showError) => {
  if (!showError) {
    switch (inputTargetStyle) {
      case 'name':
        return {
          wrapper: `${classes.wrapper}`,
          input: `${classes.input} ${classes.inputBiggest}`,
          div: ` ${classes.inputBiggest}`,
          error: `${classes.errorMessage} ${classes.errorName}`,
        }
      case 'location':
        return {
          wrapper: `${classes.wrapper}`,
          input: `${classes.input} ${classes.inputMedium}`,
          div: ` ${classes.inputMedium}`,
          error: `${classes.errorMessage} ${classes.errorLocation}`,
        }
      case 'skillName':
        return {
          wrapper: `${classes.wrapperSkillName}`,
          input: `${classes.input} ${classes.inputSmaller}`,
          div: ` ${classes.skillName}`,
          error: `${classes.errorMessage} ${classes.errorSkill}`,
        }
      case 'skillDuration':
        return {
          wrapper: `${classes.wrapper}`,
          input: `${classes.input} ${classes.inputSmallest}`,
          div: ` ${classes.skillDuration}`,
          error: `${classes.errorMessage} ${classes.errorSkillDuration}`,
        }
    }
  } else {
    switch (inputTargetStyle) {
      case 'name':
        return {
          wrapper: `${classes.wrapper}`,
          input: `${classes.inputError} ${classes.inputBiggest}`,
          div: ` ${classes.inputBiggest}`,
          error: `${classes.errorMessage} ${classes.errorName}`,
        }
      case 'location':
        return {
          wrapper: `${classes.wrapper}`,
          input: `${classes.inputError} ${classes.inputMedium}`,
          div: ` ${classes.inputMedium}`,
          error: `${classes.errorMessage} ${classes.errorLocation}`,
        }
      case 'skillName':
        return {
          wrapper: `${classes.wrapperSkillName}`,
          input: `${classes.inputError} ${classes.inputSmaller}`,
          div: `${classes.skillName}`,
          error: `${classes.errorMessage} ${classes.errorSkill}`,
        }
      case 'skillDuration':
        return {
          wrapper: `${classes.wrapper}`,
          input: `${classes.input} ${classes.inputSmallest}`,
          div: ` ${classes.skillDuration}`,
          error: `${classes.errorMessage} ${classes.errorSkillDuration}`,
        }
    }
  }
}
