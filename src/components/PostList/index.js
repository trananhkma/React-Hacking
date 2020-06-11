import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container"

import Item from "../PostItem"
import {JsonPlaceHolder} from "../../request"


const PostList = () => {
  const [state, setState] = React.useState([]);
  useEffect(() => {
    JsonPlaceHolder.get().then(response => setState(response.data))
  });

  return(
    <Container>
      { state &&
        state.map(({id, ...other})=>
          <Item key={id} {...other}/>
        )
      }
    </Container>
  )
}

export default PostList