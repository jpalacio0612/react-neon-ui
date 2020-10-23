import React from 'react'
import { Select } from './Select'

export default {
  title: 'NeonUI/Component/Select',
  component: Select
}

const VariantsTemplate = () => (
  <div>
    <Select
      style={{ margin: '10px' }}
      value='primary'
      options={['primary', 'secondary']}
    />
    <Select
      style={{ margin: '10px' }}
      variant='secondary'
      value='secondary'
      options={['primary', 'secondary']}
    />
  </div>
)

const SizesTemplate = () => (
  <div>
    <Select
      style={{ margin: '10px' }}
      size='small'
      value='small'
      options={['small', 'medium', 'large']}
    />
    <Select
      style={{ margin: '10px' }}
      size='medium'
      value='medium'
      options={['small', 'medium', 'large']}
    />
    <Select
      style={{ margin: '10px' }}
      size='large'
      value='large'
      options={['small', 'medium', 'large']}
    />
  </div>
)

export const Variants = VariantsTemplate.bind({})
export const Sizes = SizesTemplate.bind({})
