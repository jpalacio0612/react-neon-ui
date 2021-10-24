<p align="center">
  <a href="https://react-neon-ui-demo.vercel.app/">
    <img src="https://raw.githubusercontent.com/jpalacio0612/react-neon-ui-demo/main/src/assets/logo.png" alt="Chakra logo" width="200" />
  </a>
</p>

<h1 align="center">React component library based on styled components 🚀</h1>
<p align="center">
  <img alt="MIT License" src="https://img.shields.io/github/license/chakra-ui/chakra-ui"/>
  <img alt="NPM version" src="https://badgen.net/npm/v/react-neon-ui" />
</p>


## Install

For npm users:

```shell
  $ npm install react-neon-ui styled-components
```

For Yarn users:

```shell
  $ yarn add react-neon-ui styled-components
```

## Links

[Documentation click here](https://react-neon-ui-demo.vercel.app/)

[Github Repository](https://github.com/jpalacio0612/react-neon-ui)

[Demo Repository](https://github.com/jpalacio0612/react-neon-ui-demo)

## Example

```jsx
import React from 'react'
import { Button } from 'react-neon-ui'

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
import { Button } from 'react-neon-ui'
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
