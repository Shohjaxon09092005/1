import React from 'react'
import PLPHero from '../component/PLPHero'
import PLPCategory from '../component/PLPCategory'
import PLPInput from '../component/PLPInput'
import PLPGrid from '../component/PLPGrid'

function PLP() {
  return (
    <main className='plp'>
      <PLPHero/>    
      <PLPCategory/>
      <PLPInput/>
      <PLPGrid/>
    </main>
  )
}

export default PLP
