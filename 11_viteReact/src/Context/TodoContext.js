import React from "react";
import { useContext } from "react";

export const UserContext = React.createContext({})

export const UserContextProvider = UserContext.Provider

export default function useTodo(){
    return useContext(UserContext)
}