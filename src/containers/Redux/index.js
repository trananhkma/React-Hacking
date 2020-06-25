import React from 'react'
import styles from '../Axios/style.module.css'
import PostRedux from '../../components/PostRedux'
import {Home} from '../../components/Button'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/Table'

const Item = props => {
  return(    
    <tr>
      <td>{props.id}</td>
      <td>{props.userId}</td>
      <td>{props.title}</td>
      <td>{props.body}</td>
      <td><button className="btn btn-danger" onClick={() => props.removeItem(props)}>Remove</button></td>
    </tr>
  )
}

const Redux = props => {
  return (
    <div className={`App ${styles.bgColor}`}>
      <Home/>
      <h1 className={styles.title}>Redux playground</h1>
      <h2 className={styles.title}>Reducer1: Counter</h2>
      <h2 className={styles.title}>{props.counter}</h2>
      <button className="btn btn-info" onClick={() => props.increase()}>Increase</button>
      <button className="btn btn-danger" onClick={() => props.decrease()}>Decrease</button>
      <br/>
      <br/>
      <br/>
      <h2 className={styles.title}>Reducer2: Checkout</h2>
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
      {
        props.selected.map((item)=>
          <Item key={item.id} {...item} removeItem={props.removeItem}/>
        )
      }
      </tbody>
    </Table>
      <PostRedux selectItem={props.selectItem}/>
    </div>
  );
}

const mapState = globalState => ({
  counter: globalState.counter.value,
  selected: globalState.checkout.items
})

const mapDispatch = dispatch => ({
  increase: () => dispatch({type: "INCREMENT"}),
  decrease: () => dispatch({type: "DECREMENT"}),
  selectItem: data => dispatch({
    type: "SELECT",
    item: {
      id: data.id,
      userId: data.userId,
      title: data.title,
      body: data.body
    }
  }),
  removeItem: data => dispatch({
    type: "REMOVE",
    item: {
      id: data.id,
      userId: data.userId,
      title: data.title,
      body: data.body
    }
  })


})

export default connect(mapState, mapDispatch)(Redux)