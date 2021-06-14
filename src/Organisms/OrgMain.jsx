import React from 'react'
import MolSection from '../Molecules/MolSection/MolSection'
import classes from './OrgMain.module.css'

const OrgMain = () => {
  return (
    <main className={classes.main}>
      <MolSection
        text={'Portfolio'}
        type={'portfolio'}
        content={[
          { text: 'Bootstrap 4 Material Design (Sample Link)', link: '#' },
          { text: 'Modern JavaScript stack', link: '#' },
          { text: 'Datepicker for twitter bootstrap', link: '#' },
          { text: 'Fast and reliable Bootstrap widgets in Angular', link: '#' },
        ]}
      />

      <MolSection
        text={'Experience'}
        type={'experience'}
        content={[
          { text: 'PHP', duration: '6' },
          { text: 'Ruby', duration: '2' },
          { text: 'JavaScript', duration: '4.5' },
        ]}
      />

      <MolSection
        text={'The Most Amaizing...'}
        type={'quote'}
        content={[{ text: 'The only true wisdom is in knowing you know nothing...' }]}
      />

      <MolSection
        text={'In clients I look for...'}
        type={'quote'}
        content={[{ text: 'There is only one good, knowledge, and one evil, ignorance.' }]}
      />
    </main>
  )
}
export default OrgMain
