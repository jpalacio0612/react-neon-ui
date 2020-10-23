import React from 'react'
import { action } from '@storybook/addon-actions'
import { NumberInput } from './NumberInput'

export default {
  title: 'NeonUI/Component/NumberInput',
  component: NumberInput
}

const FormattedTemplate = () => (
  <div>
    <NumberInput
      value='1,000,000'
      style={{ margin: '10px' }}
      formatted
      onChange={action('Primary Changed')}
    />
    <NumberInput
      value='$1,000,000'
      style={{ margin: '10px' }}
      formatted='currency'
      onChange={action('Secondary Changed')}
    />
  </div>
)

const VariantsTemplate = () => (
  <div>
    <NumberInput
      placeholder='primary'
      style={{ margin: '10px' }}
      onChange={action('Primary Changed')}
    />
    <NumberInput
      placeholder='secondary'
      style={{ margin: '10px' }}
      variant='secondary'
      onChange={action('Secondary Changed')}
    />
  </div>
)

const SizesTemplate = () => (
  <div>
    <NumberInput
      placeholder='small'
      style={{ margin: '10px' }}
      size='small'
      onChange={action('Small Changed')}
    />
    <NumberInput
      placeholder='medium'
      style={{ margin: '10px' }}
      size='medium'
      onChange={action('Medium Changed')}
    />
    <NumberInput
      placeholder='large'
      style={{ margin: '10px' }}
      size='large'
      onChange={action('Large Changed')}
    />
  </div>
)

export const Formatted = FormattedTemplate.bind({})
export const Variants = VariantsTemplate.bind({})
export const Sizes = SizesTemplate.bind({})
