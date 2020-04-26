import React from "react";
import { TasksPresenter } from "./presenter";


export const TasksScreen = (props) => {
    return (
        <TasksPresenter
            {...props}
        />
    )
}