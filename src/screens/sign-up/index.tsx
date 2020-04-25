import React from "react";
import { SignUpPresenter } from "./presenter";
import { validateEmail } from "../../helpers";
import app from "../../firebase";
import { Toast } from "native-base";
import {SignUpNavigationProps} from "../../navigation/bottom-tab-navigator";

export interface Props extends SignUpNavigationProps {

}
export const SignInScren = ({navigation}: Props) => {
    const[email, setEmail] = React.useState<string>("");
    const[password, setPassword] = React.useState<string>("");
    const[emailError, setEmailError] = React.useState("");
    const[passwordError, setPasswordError] = React.useState("");
    const[confirmPassword, setConfirmPassword] = React.useState("");
    const[confirmPasswordError, setConfirmPasswordError] = React.useState("");
    const[loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if(email  && !(validateEmail(email))){
            setEmailError("email is in valid");
        }else{
            setEmailError("");
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

    React.useEffect(() => {
        if(confirmPassword && (confirmPassword.trim().length === 0)) {
            setConfirmPasswordError("confirmPassword is required");

        }else if(confirmPassword && confirmPassword !== password) {
            setConfirmPasswordError("passwords must match");
        }else{
            setConfirmPasswordError("");
        }

    },[confirmPassword]);

    const submit = async() => {
        setLoading(true);
        try {
            const res = await app.auth().createUserWithEmailAndPassword(email, password);
            setLoading(false);
            Toast.show({
                text: "Account Created Please Login",
                type: "success"
            });
            resetForm();
            navigation.navigate("login");
        } catch (error) {
            setLoading(false);
            Toast.show({
                text: error.message
            });
        }
    }

    const resetForm = () => {
        setPassword("");
        setEmail("");
        setConfirmPassword("");
    }


    return (
        <SignUpPresenter
            navigation={navigation}
            onChangeEmail={setEmail}
            onChangePassword={setPassword}
            email={email}
            password={password}
            passwordError={passwordError}
            emailError={emailError}
            confirmPassword={confirmPassword}
            onChangeConfirmPassword={setConfirmPassword}
            submit={submit}
            loading={loading}
            confirmPasswordError={confirmPasswordError}
        />
    )
}