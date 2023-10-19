import React,{useState,useRef,useEffect} from 'react'
import { AddButton, AddToList, DeleteIcon, EmptyMessage, EmptyMessageWrapper, InputBar, SadIcon, TaskContainer, TaskName, TaskWrap, Tasks, ToDoContainer, ToDoWrap, TodoList } from '../../styles/ToDo'
import {AiFillDelete,AiOutlinePlus} from 'react-icons/ai'
import {BiSad} from 'react-icons/bi'

const ToDo = () => {

   const newTask = JSON.parse(localStorage.getItem('tasks')) || []
   const [taskArray, setTaskArray] = useState(newTask)
   const [tasks, setTasks] = useState('')
   const taskRef = useRef(null)


   useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(taskArray))
   },[taskArray])

   const handleTasks = (e) => {
    setTasks(e.target.value)
   }

   const handleOutput = () => {
        setTaskArray([...taskArray,tasks]) 
        taskRef.current.value = ''
    }

    const handleDelete = (index) => {
        const updatedArray = [...taskArray]
        updatedArray.splice(index,1)
        setTaskArray(updatedArray)
    }


   
  return (
    <ToDoContainer>
        <ToDoWrap>
            <TodoList>
                <AddToList>
                    <InputBar ref = {taskRef} type = "text" placeholder = "Add tasks from here..." onChange = {handleTasks}/>
                    <AddButton onClick = {handleOutput}><AiOutlinePlus/></AddButton>
                </AddToList>
                <TaskContainer>
                    {taskArray.length > 0 ?
                    (<TaskWrap>
                        {taskArray.map((task,index) => (
                        <Tasks key = {index}>
                            <TaskName>{task}</TaskName>
                            <DeleteIcon onClick = {() => {handleDelete(index)}}><AiFillDelete/></DeleteIcon>
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