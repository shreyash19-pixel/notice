import { ADD_TO_LIST, DEL_FROM_LIST } from "./actions"

const taskList = JSON.parse(localStorage.getItem('taskList')) || []

const initialState = {
    todos : taskList
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ADD_TO_LIST:
            return {
                ...state , 
                todos : [...state.todos, action.payload]
            }
        case DEL_FROM_LIST:
            return {
                ...state ,
                todos : state.todos.filter((todo) => todo !== action.payload)
            }
        default:
            return state
    }
} 

export default reducer