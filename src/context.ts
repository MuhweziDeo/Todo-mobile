import React from "react"
import { User } from "firebase"

export const AppContex: {user: User| null} = {
    user: null
}


export const defaultContext = React.createContext(AppContex)