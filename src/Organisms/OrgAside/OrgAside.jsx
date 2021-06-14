import React from 'react'
import MolSection from '../../Molecules/MolSection/MolSection'
import { codeString } from './OrgAsideAssets'

const OrgAside = () => {
  return (
    <aside>
      <MolSection
        text={'Sample code'}
        type={'code'}
        content={[
          {
            text: codeString,
          },
        ]}
      />
    </aside>
  )
}
export default OrgAside
