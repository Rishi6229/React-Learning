import React from 'react'
import { useState } from 'react'

function NestedObject() {

  const [person , setPerson] = useState({
    name:'Rishi',
    artwork:{
        title: 'The starry night',
        city: 'New York', 
    }
  })
  
  const handleFirstNameChange = (e) => {
    setPerson({
        ...person,
        name: e.target.value
    })
  }
 

  const handleTitleChange = (e) => {
    setPerson({
        ...person,
        artwork:{
            ...person.artwork,
            title: e.target.value
        }
    })
  }


  const handleCityChange = (e) => {
    setPerson({
        ...person,
        artwork:{
            ...person.artwork,
            city: e.target.value
        }
    })
  }









  return (
    <div>
        <label htmlFor="">
          Name:
          <input type="text" name="Name" id="" onChange={handleFirstNameChange}/>
        </label>

        <label htmlFor="">
          Title:
          <input type="text" name="Title" id="" onChange={handleTitleChange} />
        </label>

        <label htmlFor="">
          City:
          <input type="text" name="City" id="" onChange={handleCityChange}/>
        </label>

        <p>
            <i>{person.artwork.title}</i>
            {' by'}
            {person.name}
            <br />
            {`located in ${person.artwork.city}`}
        </p>

    </div>
  )
}

export default NestedObject