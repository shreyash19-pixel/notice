import React,{useState,useRef, useEffect} from 'react'
import { AddButton, AddToList, DeleteIcon, EmptyMessage, EmptyMessageWrapper, InputBar, SadIcon, TaskContainer, TaskName, TaskWrap, Tasks, ToDoContainer, ToDoWrap, TodoList } from '../../styles/ToDo'
import {AiFillDelete,AiOutlinePlus} from 'react-icons/ai'
import {BiSad} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { addToList, delFromList } from '../../actions/actions'


const ToDo = () => {

  const [tasks, setTasks] = useState('')
  const taskRef = useRef()
  
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(todos))
  },[todos])

  const handleAddTodo = () => {
    if(tasks)
    {
        dispatch(addToList(tasks))
        taskRef.current.value = ''
        setTasks('')
    }
  }

  const handleDeleteTodo = (todo) => {
    dispatch(delFromList(todo))
  }

  return (
    <ToDoContainer>
        <ToDoWrap>
            <TodoList>
                <AddToList>
                    <InputBar ref = {taskRef} type = "text" placeholder = "Add tasks from here..." onChange = {(e) => setTasks(e.target.value)} />
                    <AddButton onClick = {handleAddTodo}><AiOutlinePlus/></AddButton>
                </AddToList>
                <TaskContainer>
                {todos?.length > 0 ?
                    (<TaskWrap>
                        {todos.map((todo,index) => (
                        <Tasks key = {index}>
                            <TaskName>{todo}</TaskName>
                            <DeleteIcon onClick = {() => {handleDeleteTodo(todo)}}><AiFillDelete/></DeleteIcon>
                        </Tasks>
                        ))}
                    </TaskWrap>) :
                    (
                        <EmptyMessageWrapper>
                            <EmptyMessage>No Task Added yet</EmptyMessage>
                            <SadIcon><BiSad/></SadIcon>
                        </EmptyMessageWrapper>
                    )}
                </TaskContainer>
            </TodoList>
        </ToDoWrap>
    </ToDoContainer>
  )
}

export default ToDo