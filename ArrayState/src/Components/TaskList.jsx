import React from 'react'
import { useState } from 'react'


let taskIndex = 0;
function TaskList() {

  const[taskName , setTaskName] = useState('');
  const[task , setTask] = useState([]);




  return (
    <div>
        <h1>Task Manager Application</h1>
        <input type="text" name="" id=""  value={taskName} onChange={(e)=>{
            setTaskName(e.target.value)
        }} />
        <button onClick={(e)=>{
            setTask([
                ...task,{
                    id: taskIndex++,
                    name: taskName
                }
            ])
        }}>Add Task</button>
   
        <ul>
            {task.map(tasks =>(
                <li key={tasks.id}>{tasks.name}</li>
            ))}
        </ul>

    </div>
  )
}

export default TaskList