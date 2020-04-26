import React from "react";
import { AddTodoPresenter } from "./presenter";

export const AddTodoScreen = (props:any) => {
    const[date, setDate] = React.useState("");
    const[dateError, setDateError] = React.useState("");
    const[description, setDescription] =React.useState("");
    const[descriptionError, setDescriptionError] = React.useState("");
    const[loading, setLoading] = React.useState(false);

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