export const ADD_TO_LIST = "ADD_TO_LIST"
export const DEL_FROM_LIST = "DEL_FROM_LIST"

export const addToList = (task) => {
    return {
        type : ADD_TO_LIST,
        payload : task
    }
}

export const delFromList = (task) => {
    return {
        type : DEL_FROM_LIST,
        payload : task
    }
}