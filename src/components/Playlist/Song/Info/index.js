import React from 'react'
import styles from './style.module.css'

const Order = props => (
  <span className={styles.order} style={props.color||{color:"white"}}>{props.order}</span>
)

const Thumbnail = props => (
  <img className={`${styles.thumb} pull-left`} src={props.src} />
)

const Title = props => (
  <div className={styles.title}>{props.title}</div>
)

const Artist = props => (
  <div className={styles.artist}>{props.artist}</div>
)

const Timer = props => (
  <span className={styles.timer}>{props.timer}</span>
)

export {Order, Thumbnail, Title, Artist, Timer}