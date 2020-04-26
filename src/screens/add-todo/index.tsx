import React from "react";
import {Toast} from "native-base";
import { AddTodoPresenter } from "./presenter";
import app, { db } from "../../firebase";
import { defaultContext } from "../../context";
import { Keyboard } from "react-native";

export const AddTodoScreen = (props:any) => {
    const[date, setDate] = React.useState("");
    const[dateError, setDateError] = React.useState("");
    const[description, setDescription] =React.useState("");
    const[descriptionError, setDescriptionError] = React.useState("");
    const[loading, setLoading] = React.useState(false);
    const context = React.useContext(defaultContext);

    React.useEffect(() => {
        if(description && description.trim().length === 0) {
            setDescriptionError("Description is required");
        }else if( description && !(description.length >= 5)) {
            setDescriptionError("Description should be atleast 5 charaters");
        }else {
            setDescriptionError("");
        }

    },[description]);

    const submit = async() => {
        Keyboard.dismiss()
        setLoading(true);
        try{
            const data = {
                user_id: context.user?.uid,
                completed: false,
                dueDate: date,
                description
            }
            const res = await db.collection("todos").add({
                
            })
            context.todos = [...context.todos, data];
            setDescription("");
            setDate("");
            setLoading(false);
            Toast.show({
                type: "success",
                text: "Todo Created"
            });

        }catch(error) {
            setLoading(false);
            Toast.show({
                text: error.message
            });
        }
        
        
    }

    return (
        <AddTodoPresenter
            {...props}
            date={date}
            dateError={dateError}
            onChangeDate={setDate}
            description={description}
            onChangeDescription={setDescription}
            descriptionError={descriptionError}
            submit={submit}
            loading={loading}
        />
    )
}