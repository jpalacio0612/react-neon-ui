import React from 'react'
import { Select } from './Select'

export default {
  title: 'NeonUI/Component/Select',
  component: Select
}

const VariantsTemplate = () => (
  <div>
    <Select
      style={{ margin: '0 10px' }}
      label='Select variant'
      options={['primary', 'secondary']}
    />
    <Select
      style={{ margin: '0 10px' }}
      variant='secondary'
      label='Select variant'
      options={['primary', 'secondary']}
    />
  </div>
)

const SizesTemplate = () => (
  <div>
    <Select
      style={{ margin: '0 10px' }}
      size='small'
      label='small'
      options={['small', 'medium', 'large']}
    />
    <Select
      style={{ margin: '0 10px' }}
      size='medium'
      label='medium'
      options={['small', 'medium', 'large']}
    />
    <Select
      style={{ margin: '0 10px' }}
      size='large'
      label='large'
      options={['small', 'medium', 'large']}
    />
  </div>
)

const MultiSelectTemplate = () => (
  <div>
    <Select
      style={{ margin: '0 10px' }}
      label='Multi Select'
      options={['primary', 'secondary']}
      multiple
    />
    <Select
      style={{ margin: '0 10px' }}
      label='Single Select'
      options={['primary', 'secondary']}
    />
  </div>
)
export const Variants = VariantsTemplate.bind({})
export const Sizes = SizesTemplate.bind({})
export const MultiSelect = MultiSelectTemplate.bind({})
