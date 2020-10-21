## Install

For npm users:

```shell
  $ npm install react-neon-ui styled-components
```

For Yarn users:

```shell
  $ yarn add react-neon-ui styled-components
```

## Example

```jsx
import React from 'react'
import { Buttom } from 'react-neon-ui'

const App = () => (
  <div>
    <Button>Click Here</Button>
  </div>
)

export default App
```

## Theme Support

We have two default themes "neon" and "cyberpunk" but you can use your custom theme through an javascript object

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Buttom } from 'react-neon-ui'
import { cyberpunk } from 'react-neon-ui'

const App = () => (
  <div>
    <ThemeProvider theme={cyberpunk}>
      <Button>Click Here</Button>
    </ThemeProvider>
  </div>
)

export default App
```

## Explore with storybook

You can clone the repository and use the storybook to see examples of each component, modify the repository, and bring in new ideas.

```shell
  $ npm run storybook
```

or

```shell
  $ yarn storybook
```
