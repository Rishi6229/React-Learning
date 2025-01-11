import { useState } from 'react'
import './App.css'
import SetArrayState from './Components/SetArrayState'
import TaskList from './Components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
       {/* <SetArrayState /> */}
       <TaskList />
     </div>
  )
}

export default App
