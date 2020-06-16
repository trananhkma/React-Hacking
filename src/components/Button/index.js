import React from 'react'
import styles from './style.module.css'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";


const ButtonIcon = props => (
  <button type="button" className={`btn btn-sm ${styles.icon}`} onClick={() => props.onClick()} onBlur={() => props.onBlur()}>
    <FontAwesomeIcon icon={props.icon}/>
  </button>
)

export const TrollButton = () => {
  const [position, setPosition] = React.useState()

  return (
    <Button
      variant="danger"
      style={position}
      onMouseEnter={() => setPosition(
        {
          position: "absolute",
          top: Math.floor(Math.random() * 600) + "px",
          left: Math.floor(Math.random() * 1200) + "px"
        }
      )}
    >ĐÉO</Button>
  )
}

export const Home = () => (
  <NavLink className="btn btn-link" to="/">Home</NavLink>
)

export default ButtonIcon