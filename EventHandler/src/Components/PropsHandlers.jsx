import React from 'react'

function PropsHandlers(props) {
  return (
    <div>
        <button onClick={()=>{
            alert(props.message);
        }}>
            {props.children}    
        </button>
    </div>
  )
}

export default PropsHandlers