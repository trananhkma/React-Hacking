import React from 'react'
import Song from '../Song'
import data from '../../data/songs.json'


const Playlist = () => (
  <div>
    {
      data.map((song) => 
        <Song {...song}/>
      )
    }
  </div>
)

export default Playlist