import React from 'react'


const Item = props => {
  return(    
    <tr>
      <td>{props.userId}</td>
      <td>{props.title}</td>
      <td>{props.body}</td>
    </tr>
  )
}

export default Item