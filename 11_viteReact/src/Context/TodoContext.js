import React from "react";
import { useContext } from "react";

export const UserContext = React.createContext({
    todos : {
        id : 1,
        data : "todoMsg",
        completed : false
    },
    addTodo : (todo)=>{},
    updateTodo : (id,todo)=>{},
    deleteTodo : (id)=>{},
    toggleTodo : (id)=>{}
})

export const UserContextProvider = UserContext.Provider

export default function useTodo(){
    return useContext(UserContext)
}