import './App.css'
import { Button } from './components/ui/button'
import Icon from './styles/assets/icons/icon'

function App() {
  return (
    <Button as={'button'} variant={'primary'}>
      <div>
        <Icon />
        Button
      </div>
    </Button>
  )
}

export default App
