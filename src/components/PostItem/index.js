import React from 'react'


const Item = props => {
  return(    
    <tr>
      <td>{props.id}</td>
      <td>{props.userId}</td>
      <td>{props.title}</td>
      <td>{props.body}</td>
      <td><button className="btn btn-danger" onClick={() => props.deleteData(props.id)}>Delete</button></td>
    </tr>
  )
}

export default Item