import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/index.scss'

import App from './App.tsx'
import '@fontsource/roboto/400.css'

import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
