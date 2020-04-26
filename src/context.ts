import React from "react"
import { User } from "firebase"
import { Todo } from "./screens/tasks"

export const AppContex: {user: User| null, tabContainerColor: string, todos:Todo[]} = {
    user: null,
    tabContainerColor: "#39305B",
    todos: []
}


export const defaultContext = React.createContext(AppContex)