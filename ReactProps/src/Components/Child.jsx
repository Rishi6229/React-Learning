import React from 'react'




function Child(props) {
  return (
    <div>
        <h1>My name is {props.name}</h1>
        <p>I'm good at {props.skill}</p>
        <p>My age is {props.age}</p>
        <p>I like {props.likes}</p>
    </div>
  )
}

export default Child