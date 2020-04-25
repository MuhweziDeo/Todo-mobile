import React from "react";
import {AsyncStorage} from "react-native";
import {Toast} from "native-base";
import {LoginPresenter, LoginProps} from "./presenter";
import { validateEmail } from "../../helpers";
import firebase from "../../firebase";
import { Keyboard } from "react-native";
import { any } from "prop-types";

export const LoginScreen: React.FunctionComponent<LoginProps> = (props) => {
    const[email, setEmail] = React.useState<string>("");
    const[password, setPassword] = React.useState<string>("");
    const[emailError, setEmailError] = React.useState("");
    const[passwordError, setPasswordError] = React.useState("");
    const[loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if(email  && !(validateEmail(email))){
            setEmailError("email is in valid");
        }else{
            setEmailError("")
        }

    },[email]);

    React.useEffect(() => {
        if(password && (password.trim().length === 0)) {
            setPasswordError("password is required");

        }else if(password && !(password.trim().length >= 6)) {
            setPasswordError("password is must be atleast 6 characters");
        }else{
            setPasswordError("");
        }

    },[password]);

    const submit = async() => {
        Keyboard.dismiss()
        try {
            setLoading(true);
            const res: any = await firebase.auth().signInWithEmailAndPassword(email.toLocaleLowerCase(), password);
            setLoading(false);
            resetForm();
            Toast.show({
                type: "success",
                text: "Login Successful"
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
        setPassword("");
    }

    return (
        <LoginPresenter
            {...props}
            onChangeEmail={setEmail}
            onChangePassword={setPassword}
            email={email}
            password={password}
            passwordError={passwordError}
            emailError={emailError}
            submit={submit}
            loading={loading}
        />
    )
}