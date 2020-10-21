import { withThemesProvider } from 'themeprovider-storybook'
import { neon } from '../src/themes'
import { cyberpunk } from '../src/themes'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'NeonUI',
    values: [
      {
        name: 'NeonUI',
        value: '#04001A'
      }
    ]
  }
}

const themes = [
  {
    ...neon,
    name: 'Neon'
  },
  {
    ...cyberpunk,
    name: 'Cyberpunk'
  }
]

export const decorators = [withThemesProvider(themes)]
