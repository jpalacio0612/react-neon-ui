import React from 'react'
import { Divider } from './'

export default {
  title: 'NeonUI/Component/Divider',
  component: Divider
}

const VariantsTemplate = () => (
  <div>
    <Divider />
    <div style={{ margin: '20px 0' }} />
    <Divider variant='secondary' />
  </div>
)

const ThicknessTemplate = () => (
  <div>
    <Divider thick={1} />
    <div style={{ margin: '20px 0' }} />
    <Divider thick={2} />
  </div>
)

const DisabledTemplate = () => (
  <div>
    <Divider disabled />
  </div>
)

const OrientationTemplate = () => (
  <div>
    <Divider orientation='horizontal' />
    <div style={{ margin: '20px 0' }} />
    <div style={{ height: '40px', display: 'flex' }}>
      <Divider orientation='vertical' />
    </div>
  </div>
)

export const Variants = VariantsTemplate.bind({})
export const Thickness = ThicknessTemplate.bind({})
export const Disabled = DisabledTemplate.bind({})
export const Orientation = OrientationTemplate.bind({})
