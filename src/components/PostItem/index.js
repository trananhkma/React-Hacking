import React from 'react'
import Col from 'react-bootstrap/Col'


const Item = props => {
  return( 
    <Col>
      <p>{props.userId}</p>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </Col>
  )
}

export default Item