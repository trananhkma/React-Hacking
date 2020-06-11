import React from 'react'
import styles from './style.module.css'

import Container from 'react-bootstrap/Container';

import Song from '../Song'
import data from '../../data/songs.json'


const Playlist = () => (
  <div className={styles.bgColor}>
    <Container>
      {
        data.map((song) => 
          // <Song order={song.order} color={song.color || {color: 'white'}} title={song.title} artist={song.artist} timer={song.timer} src={song.src}/>
          <Song {...song}/>
        )
      }
    </Container>
  </div>
)

export default Playlist