import React from 'react'
import PostList from "../../components/PostList"
import Container from 'react-bootstrap/Container';
import styles from './style.module.css'
import {Home} from '../../components/Button'


const Axios = props => {
  return (
    <div className={`App ${styles.bgColor}`}>
      <Container>
        <Home/>
        <h3 className={styles.title}>JSON Placeholder</h3>
        <PostList {...props}/>
      </Container>
    </div>
  );
}

export default Axios