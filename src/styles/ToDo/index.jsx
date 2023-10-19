import styled from 'styled-components'


export const ToDoContainer = styled.div`
    width: 100%;
    height: 100vh;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ToDoWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2061CB;
    padding-inline: 20px;

`
export const SadIcon = styled.div`
    font-size: 36px;
    color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 425px)
    {
        font-size: 24px;
    }
`

export const EmptyMessageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 65px;
  @media (max-width: 425px)
    {
        gap:7px;
    }
`

export const EmptyMessage = styled.h1`
    color: grey;
    font-weight: 400;

    @media (max-width: 425px)
    {
        font-size: 24px;
    }
`

export const TodoList = styled.div`
    width: 100%;
    max-width: 500px;
    min-height: 500px;
    background-color: white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const AddToList = styled.div`
    width: 100%;
    display: flex;
    gap: 15px;
    padding-inline: 10px;
`

export const InputBar = styled.input`
    width: 100%;
    border-radius: 4px;
    border: 2px solid #2061CB;
    padding-top: 3px;
    padding-left: 4px;
`

export const AddButton = styled.div`
    width: 100%;
    max-width: 80px;
    min-height: 50px;
    background-color: #2061CB;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`
export const TaskContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const TaskWrap = styled.div`
    width: 100%;
    height: 100%;
    max-height: 340px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding-inline: 8px;
    gap: 10px;
`

export const Tasks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    background-color: #C4E1E5;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid black;
`

export const TaskName = styled.h3`
    color: black;
    font-weight: 500;
`

export const DeleteIcon = styled.div`
    font-size: 16px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #1A1BA1;
    padding: 8px;
    border-radius: 4px;
`