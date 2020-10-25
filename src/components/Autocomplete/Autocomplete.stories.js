import React from 'react'
import { Autocomplete } from './'
import { top100Films } from '../common/mockdata'

export default {
  title: 'NeonUI/Component/Autocomplete',
  component: Autocomplete
}

const VariantsTemplate = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <Autocomplete suggestions={top100Films} />
    <Autocomplete variant='secondary' suggestions={top100Films} />
  </div>
)

const SizesTemplate = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    }}
  >
    <Autocomplete size='small' suggestions={top100Films} />
    <Autocomplete size='medium' suggestions={top100Films} />
    <Autocomplete size='large' suggestions={top100Films} />
  </div>
)

export const Variants = VariantsTemplate.bind({})
export const Sizes = SizesTemplate.bind({})
