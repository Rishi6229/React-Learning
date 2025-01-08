import React from 'react'

function ButtonProps(props) {
  return (
    <div>
        return <button style={{backgroundColor: props.color}}>{props.label}</button>
    </div>
  )
}

export default ButtonProps