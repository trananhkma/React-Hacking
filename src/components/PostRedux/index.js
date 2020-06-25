import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'

import {getPost} from "../../request"


const Item = props => {
  return(    
    <tr>
      <td>{props.id}</td>
      <td>{props.userId}</td>
      <td>{props.title}</td>
      <td>{props.body}</td>
      <td><button className="btn btn-primary" onClick={() => props.selectItem(props)}>Select</button></td>
    </tr>
  )
}

const PostRedux = props => {
  const [state, setState] = React.useState();
  useEffect(() => {
    getPost("").then(response => setState(response.data))
  }, []);

  return(
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>UserID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {state &&
        state.map((item)=>
          <Item key={item.id} {...item} selectItem={props.selectItem}/>
        )
      }
      </tbody>
    </Table>
  )
}

export default PostRedux