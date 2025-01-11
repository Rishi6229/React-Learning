import React from 'react'
import { useState } from 'react'

let index = 0;
function SetArrayState() {
  const [name , setFirstName] = useState('');
  const [artists , setArtists] = useState([]);
  return (
    <div>
        <h1>Inspiring Writers of the world !!</h1>
        <input type="text" name="" id="" value={name} 
          onChange={(e)=>{setFirstName(e.target.value)}}
        />

        <button onClick={(e)=>{
            setArtists(
                [...artists,
                  {
                    id: index++,
                    name: name
                  }
                ]
            )
        }}>Add Readers</button>

        <ul>
            {artists.map(artist=>(
                <li key={artist.id}>{artist.name}</li>
            )) 
            }
        </ul>

    </div>
  )
}

export default SetArrayState