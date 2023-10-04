import './styles/index.scss'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'


import App from './App.tsx'

import { store } from '@/services/store.ts'

import '@fontsource/roboto/400.css'

import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
