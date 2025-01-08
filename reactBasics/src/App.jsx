import { useState } from 'react'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ConditionalRendering from './components/ConditionalRendering'
import ListRendering from './components/ListRendering'


function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert('You clicked me nigga !')
  }

  function handleState(){
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>

      <button onClick={handleState}>
        {count}
      </button>


    </div>
  )
}


function MyButton({count , onClick}){
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  )
}

export default App
