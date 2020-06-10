import React from 'react'
import styles from './style.module.css'

import Container from 'react-bootstrap/Container';

import Song from './Song'

const Playlist = props => (
  <div className={styles.bgColor}>
    <Container>
      {
        props.songs.map((song) => 
          <Song order={song.order} color={song.color || {color: 'white'}} title={song.title} artist={song.artist} timer={song.timer} src={song.src}/>
        )
      }
    </Container>
  </div>
)

export default Playlist