import React from 'react'
import styles from './style.module.css'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ButtonAddTask from '../../components/BtnAddTask'
import { useDispatch, useSelector } from 'react-redux'
import TYPE from "../../actions"
import Loader from 'react-loader-spinner'
import {Home} from '../../components/Button'


const AddTask = (props) => {
  function handleSubmit() {
    if (props.task) {
      props.dispatch({type: TYPE.ADD_TASK_REQUESTING, task: props.task})
      props.setAdding(false)
      props.setTask("")
    }
  }

  function handleCancel() {
    props.setAdding(false)
    props.setHover(false)
  }

  return(
    <div style={{marginTop:"20px"}}>
      {!props.adding ? (
        <ButtonAddTask
          onMouseEnter={() => props.setHover(true)}
          onMouseLeave={() => props.setHover(false)}
          onClick={() => props.setAdding(true)}
          hover={props.hover}
        />
      ):(
        <Form>
          <Form.Group>
            <Form.Control
              name="task" type="text" placeholder="e.g Learn React every day"
              onChange={e => props.setTask(e.target.value)}  
            />
          </Form.Group>
          <Button variant="danger" type="button" onClick={handleSubmit}>Add Task</Button>
          <Button variant="link" onClick={handleCancel}>Cancel</Button>
        </Form>
      )}
    </div>
  )
}

export default function Todo() {
  const [hover, setHover] = React.useState(false)
  const [adding, setAdding] = React.useState(false)
  const [task, setTask] = React.useState("")
  const dispatch = useDispatch()
  const {tasks, dataRequesting} = useSelector(store => {
    return store.todoList
  })

  React.useEffect(() => {
    dispatch({type: TYPE.GET_TASK_REQUESTING})
  }, [])

  function removeTask(taskID) {
    dispatch({type: TYPE.DELETE_TASK_REQUESTING, taskID: taskID})
    setAdding(false)
  }
  return (
    <div className={styles.bgColor}>
      <Container>
        <Home/>
        <h2 className={styles.title}>Todo List</h2>
        { dataRequesting ? (
          <Loader type="ThreeDots" color="red"/>
        ):(
        <>
          { 
            tasks.map((task) => 
              <InputGroup key={task.id}>
                <InputGroup.Prepend>
                  <InputGroup.Checkbox className={styles.bigCb} onClick={() => removeTask(task.id)}/>
                </InputGroup.Prepend>
                <Form.Control className={styles.noBg} value={task.des} disabled/>
              </InputGroup>
            )
          }
          <AddTask
            hover={hover} setHover={setHover}
            adding={adding} setAdding={setAdding}
            task={task} setTask={setTask}
            dispatch={dispatch}
          />
        </>
        )}
      </Container>
    </div>
  )
}