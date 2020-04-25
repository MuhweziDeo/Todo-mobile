import React from "react";
import {LoginPresenter, LoginProps} from "./presenter";

export const LoginScreen: React.FunctionComponent<LoginProps> = (props) => {
    return (
        <LoginPresenter
            {...props}
        />
    )
}