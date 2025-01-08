import { useState } from 'react'
import './App.css'
import PropsButton from './Components/PropsHandlers'
import PropsHandlers from './Components/PropsHandlers'
import ButtonProps from './Components/ButtonProps'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <PropsHandlers message="New Message">Click Button</PropsHandlers>
       <PropsHandlers message = "Another Message">Click Another Button</PropsHandlers>




       <ButtonProps message = "Upload Movie">Upload a new movie</ButtonProps>
       <ButtonProps />
    </>
  )
}

export default App
