import React, { useState } from 'react'

function DeleteTask(props) {
  
  const [artists , setArtists] = useState(props.TaskList)
  return (
    <div>
        <ul>
            {artists.map(artist =>(
                <li key={artist.id}>
                    {artist.name} {' '}
                    <button onClick={()=>{
                        setArtists(
                            ...artists.filter(a => a.id !== artist.id)
                        )
                    }}>Delete Task
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default DeleteTask