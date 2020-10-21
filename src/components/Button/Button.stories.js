import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from './'

export default {
  title: 'NeonUI/Component/Button',
  component: Button
}

const VariantsTemplate = () => (
  <div>
    <Button style={{ margin: '10px' }} onClick={action('Primary CLicked')}>
      Primary
    </Button>
    <Button
      style={{ margin: '10px' }}
      onClick={action('Secondary CLicked')}
      variant='secondary'
    >
      Secondary
    </Button>
  </div>
)

const SizesTemplate = () => (
  <div>
    <Button
      style={{ margin: '10px' }}
      size='small'
      onClick={action('Small CLicked')}
    >
      Small
    </Button>
    <Button
      style={{ margin: '10px' }}
      size='medium'
      onClick={action('Medium CLicked')}
    >
      Medium
    </Button>
    <Button
      style={{ margin: '10px' }}
      size='large'
      onClick={action('Large CLicked')}
    >
      Large
    </Button>
  </div>
)

export const Variants = VariantsTemplate.bind({})
export const Sizes = SizesTemplate.bind({})
