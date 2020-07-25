import React from 'react'
import { AiOutlinePlus, AiFillPlusCircle } from "react-icons/ai";
import styles from './style.module.css'


const ButtonAddTask = (props) => (
  <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.onClick}>
    { props.hover ? (
      <div>
        <AiFillPlusCircle size="30px" color="red"/>
        <span style={{color: "red"}}> Add task</span>
      </div>
    ) : (
      <div>
        <AiOutlinePlus size="30px" color="red"/>
        <span style={{color: "grey"}}> Add task</span>
      </div>
    )}
  </button>
)

export default ButtonAddTask