import React from 'react'
import {TrollButton} from '../../components/Button'
import { Home } from "../../components/Button";
import styles from "./style.module.css"
import dog from "./giphy.gif"


const Hover = () => {
  return (
    <div className={` App ${styles.bg}`}>
      <Home/>
      <h3 className={styles.question}>Do you wanna be my girlfriend baby?</h3>
      <img alt="dog smile" src={dog} className={styles.smile}/>
      <TrollButton/>
    </div>
  );
}

export default Hover