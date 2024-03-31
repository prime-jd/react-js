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
            localStorage.setItem('todo', JSON.stringify(state.todos));
            
        },
        removeTodo : (state,action)=>{
            state.todos.filter((todo)=todo.id == action.payload )
            localStorage.setItem('todo', JSON.stringify(state.todos));

        }
       
    }
})

export const {addTodo, removeTodo} = TodoSlice.actions

export default TodoSlice.reducer