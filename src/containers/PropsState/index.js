import React from 'react';
import Playlist from '../../components/Playlist';
import Container from 'react-bootstrap/Container';
import styles from './style.module.css'
import {Home} from '../../components/Button'


const PropsState = () => (
  <div className={styles.bgColor}>
  <Container>
    <Home/>
    <Playlist/>
  </Container>
  </div>
)

export default PropsState;
