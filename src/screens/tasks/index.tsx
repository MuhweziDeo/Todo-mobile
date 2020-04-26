import React from "react";
import {Toast} from "native-base";
import { TasksPresenter } from "./presenter";
import app,{ db } from "../../firebase";
import { defaultContext } from "../../context";


export interface Todo {
    completed: boolean,
    description: string,
    dueDate: any,
    id?: string,
    user_id?:string
}
export const TasksScreen:React.FunctionComponent = (props) => {
    const[todos, setTodos] = React.useState<Todo[]>([]);
    const context = React.useContext(defaultContext);
    const[loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        (async()=>{
            setLoading(true);
            const snapshot = await db.collection("todos").where("user_id", "==", context.user?.uid).get();
            const docs:Todo[] = [];
            snapshot.forEach((snap) => {
                const d = {
                    ...snap.data(),
                    id: snap.id
                } as Todo
                docs.push(d);
            });
            context.todos = docs;
            setLoading(false);
            setTodos([...docs]);
        })()
    },[]);

    const markAsComplete = async(index:number) => {
        const item = todos[index];
        setLoading(true);
        try {

            await db.collection("todos").doc(item.id).set({
                completed: !item.completed,
            }, {merge: true});
            item.completed = !item.completed;

            setLoading(false);
            Toast.show({
                text: "Completed",
                type: "success"
            });


            
        } catch (error) {
            setLoading(false);
            Toast.show({
                text: "Something went wrong",
            });
        }
    }

    return (
        <TasksPresenter
            {...props}
            todos={todos}
            complete={markAsComplete}
            loading={loading}
        />
    )
}