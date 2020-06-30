import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table'

import Item from "../PostItem"
import {getPost, deletePost} from "../../request"


const PostList = props => {
  const index = props.match.params.index;
  const [state, setState] = React.useState();
  useEffect(() => {
    getPost(index || "").then(response => setState(response.data))
  }, [index]);


  function deleteData(id) {
    deletePost(id);
    getPost("").then(response => setState(response.data))
  }

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
      {!index ?
        state &&
        state.map((item)=>
          <Item key={item.id} {...item} deleteData={() => deleteData(item.id)}/>
        )
        : <Item {...state} deleteData={() => deleteData(state?.id)}/>
      }
      </tbody>
    </Table>
  )
}

export default PostList