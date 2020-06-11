import React from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ButtonIcon = props => (
  <button type="button" className={`btn btn-sm ${styles.icon}`} onClick={() => props.onClick()} onBlur={() => props.onBlur()}>
    <FontAwesomeIcon icon={props.icon}/>
  </button>
)

export default ButtonIcon