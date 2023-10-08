import './App.css'
import { Provider } from 'react-redux'

import { Router } from '@/routes'
import { store } from '@/services/store.ts'

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
