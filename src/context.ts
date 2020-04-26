import React from "react"
import { User } from "firebase"

export const AppContex: {user: User| null, tabContainerColor: string} = {
    user: null,
    tabContainerColor: "#39305B"
}


export const defaultContext = React.createContext(AppContex)