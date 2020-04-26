import React from "react";
import {LandingPresenter, LandingProps} from "./presenter";
import app, { db } from "../../firebase";
import {  defaultContext } from "../../context";
import { Todo } from "../tasks";

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
            });
            db.collection('todos')
            .onSnapshot((snapshot) => {
              //...
              snapshot.forEach((s) => {
                  if(context.user?.uid === s.data().user_id) {
                    context.todos = [...context.todos, {...s.data() as Todo, id: s.id}];
                  }
              })
              
            }, (error) => {
              //...
            });
        })()

    },[]);
    
    return (
        <LandingPresenter
            navigation={navigation}
            loading={loading}
        />
    )
}