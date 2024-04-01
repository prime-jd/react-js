import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{
        id :1,
        text : "Hello World"
    }]
}

export const TodoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action)=>{
           const todo = {
            id :nanoid(),
            text : action.payload }
            state.todos.push(todo)
            window.localStorage.setItem("todos",JSON.stringify(state.todos))
            
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
            window.localStorage.setItem("todos",JSON.stringify(state.todos))

        },
       
    }
})

export const {addTodo, removeTodo} = TodoSlice.actions

export default TodoSlice.reducer