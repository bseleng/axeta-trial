import React from 'react'
import MolSection from '../../Molecules/MolSection/MolSection'

const OrgAside = () => {
  return (
    <aside>
      <MolSection
        text={'Sample code'}
        type={'code'}
        content={[
          {
            text: `<div className = 'golden-grid'>
    <div style = 'grid-area:
        11 / 1 / span 10 / 
        span 12;'>
    </div>
</div> `,
          },
        ]}
      />
    </aside>
  )
}
export default OrgAside
