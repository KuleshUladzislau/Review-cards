import './App.css'
import { Button } from './components/ui/button'
import { Icon } from './styles/assets/icons/icon'

function App() {
  return (
    <Button variant={'primary'} as={'button'}>
      <Icon />
      Button
    </Button>
  )
}

export default App
