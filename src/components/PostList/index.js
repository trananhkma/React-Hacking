import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container"
import Table from 'react-bootstrap/Table'

import Item from "../PostItem"
import {getPosts} from "../../request"


const PostList = () => {
  const [state, setState] = React.useState([]);
  useEffect(() => {
    getPosts().then(response => setState(response.data))
  }, []);

  return(
    <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
        { state &&
          state.map(({id, ...others})=>
            <Item key={id} {...others}/>
          )
        }
        </tbody>
      </Table>
    </Container>
  )
}

export default PostList