import { useState } from 'react'
import './App.css'
import SetArrayState from './Components/SetArrayState'
import TaskList from './Components/TaskList'
import DeleteTask from './Components/DeleteTask'

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
