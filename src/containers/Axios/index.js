import React from 'react'
import PostList from "../../components/PostList"
import styles from './style.module.css'


const Axios = () => {
  return (
    <div className={`App ${styles.bgColor}`}>
      <h3 className={styles.title}>JSON Placeholder</h3>
      <PostList/>
    </div>
  );
}

export default Axios