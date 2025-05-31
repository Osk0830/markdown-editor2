import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { Editor } from './pages/editor'

const GlobalStyle = createGlobalStyle`
    body * {
      box-sizing: border-box;
    }
  `

const Main = (
  <>
    <GlobalStyle />
    <Editor />
  </>
)


const root = createRoot(document.getElementById('app'))
root.render(Main)
