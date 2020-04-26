import React from "react";
import {LandingPresenter, LandingProps} from "./presenter";
import app from "../../firebase";
import {  defaultContext } from "../../context";

export const LandingScreen: React.FunctionComponent<LandingProps> = ({navigation}) => {
    const[loading, setLoading] = React.useState(true);
    const context = React.useContext(defaultContext);
 
    React.useEffect(() => {
        (async() => {
            app.auth().onAuthStateChanged((user) => {
                setLoading(false);
                context.user = user;
                if(user) {
                    navigation.navigate("home");
                }
            })
        })()

    },[]);
    
    return (
        <LandingPresenter
            navigation={navigation}
            loading={loading}
        />
    )
}