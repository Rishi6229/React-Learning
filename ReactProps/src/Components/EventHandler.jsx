import React from 'react'

function EventHandler(props) {
  return (
    <div>
        <button onClick = {props.onClick}>Props Button</button>
    </div>
  )
}

export default EventHandler