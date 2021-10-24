import React from 'react'
import { action } from '@storybook/addon-actions'
import { TextArea } from './TextArea'

export default {
  title: 'NeonUI/Component/TextArea',
  component: TextArea
}

const VariantsTemplate = () => (
  <div>
    <TextArea
      placeholder='primary'
      style={{ margin: '10px' }}
      onChange={action('Primary Changed')}
    />
    <TextArea
      placeholder='secondary'
      style={{ margin: '10px' }}
      variant='secondary'
      onChange={action('Secondary Changed')}
    />
  </div>
)

const SizesTemplate = () => (
  <div>
    <TextArea
      placeholder='small'
      style={{ margin: '10px' }}
      size='small'
      onChange={action('Small Changed')}
    />
    <TextArea
      placeholder='medium'
      style={{ margin: '10px' }}
      size='medium'
      onChange={action('Medium Changed')}
    />
    <TextArea
      placeholder='large'
      style={{ margin: '10px' }}
      size='large'
      onChange={action('Large Changed')}
    />
  </div>
)

export const Variants = VariantsTemplate.bind({})
export const Sizes = SizesTemplate.bind({})
