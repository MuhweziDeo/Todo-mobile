import React from "react";
import {LandingPresenter, LandingProps} from "./presenter";

export const LandingScreen: React.FunctionComponent<LandingProps> = (props) => {
    
    return (
        <LandingPresenter
            {...props}
        />
    )
}