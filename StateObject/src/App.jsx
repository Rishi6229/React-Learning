import { useState } from 'react'

import './App.css'

function App() {
  const [person , setPerson] = useState({
    firstName:'Rishi',
    lastName: 'Jha',
    Email:'jharishi220@gmail.com'
  })


  const handleChange = (e)=>{
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  }
  return (
    <div>
       <input type="text" name="firstName" id="firstName"  placeholder='enter your name' onChange={handleChange}/>
       <input type="text" name="lastName" id="lastName" placeholder='enter your last name' onChange={handleChange}/>
       <input type="text" name="Email" id="email" placeholder='enter your email address' onChange={handleChange}/>


       <p>Welcome {person.firstName}: {person.lastName} your current email address is {person.Email}</p>
    </div>
  )
}

export default App
