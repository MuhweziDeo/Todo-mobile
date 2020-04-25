import React from "react";
import { Toast } from "native-base";
import { ForgotPasswordPresenter, ForgotPasswordProps } from "./presenter";
import { validateEmail } from "../../helpers";
import firebase from "../../firebase";
import { Keyboard } from "react-native";

export const ForgotPasswordScreen: React.FunctionComponent = ({navigation}: any) => {
    const[email, setEmail] = React.useState<string>("");
    const[emailError, setEmailError] = React.useState("");
    const[loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if(email  && !(validateEmail(email))){
            setEmailError("email is in valid");
        }else{
            setEmailError("")
        }

    },[email]);



    const submit = async() => {
        Keyboard.dismiss()
        try {
            setLoading(true);
            const res = await firebase.auth().sendPasswordResetEmail(email);
            setLoading(false);
            resetForm();
            Toast.show({
                type: "success",
                text: "Please check your email for further instructions"
            });
        } catch (error) {
            setLoading(false);
            Toast.show({
                text: error.message,
            });
        }
    }

    const resetForm = () => {
        setEmail("");
    }

    return (
        <ForgotPasswordPresenter
            navigation={navigation}
            onChangeEmail={setEmail}
            email={email}
            emailError={emailError}
            submit={submit}
            loading={loading}
        />
    )
}