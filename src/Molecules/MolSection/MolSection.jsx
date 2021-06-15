import React from 'react'
import AtmHeading from '../../Atoms/AtmHeading/AtmHeading'
import AtmSectionContent from '../../Atoms/AtmSectionContent/AtmSectionContent'
import classes from './MolSection.module.css'

const MolSection = ({ text, content, type, setContent }) => {
  return (
    <section className={classes.section}>
      <AtmHeading text={text} />
      <AtmSectionContent content={content} type={type} setContent={setContent} />
    </section>
  )
}

export default MolSection
