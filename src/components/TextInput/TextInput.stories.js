import React from 'react'
import { action } from '@storybook/addon-actions'
import { TextInput } from './TextInput'

export default {
  title: 'NeonUI/Component/TextInput',
  component: TextInput
}

const VariantsTemplate = () => (
  <div>
    <TextInput
      placeholder='primary'
      style={{ margin: '10px' }}
      onChange={action('Primary Changed')}
    />
    <TextInput
      placeholder='secondary'
      style={{ margin: '10px' }}
      variant='secondary'
      onChange={action('Secondary Changed')}
    />
  </div>
)

const SizesTemplate = () => (
  <div>
    <TextInput
      placeholder='small'
      style={{ margin: '10px' }}
      size='small'
      onChange={action('Small Changed')}
    />
    <TextInput
      placeholder='medium'
      style={{ margin: '10px' }}
      size='medium'
      onChange={action('Medium Changed')}
    />
    <TextInput
      placeholder='large'
      style={{ margin: '10px' }}
      size='large'
      onChange={action('Large Changed')}
    />
  </div>
)

export const Variants = VariantsTemplate.bind({})
export const Sizes = SizesTemplate.bind({})
