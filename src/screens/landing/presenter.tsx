import React from "react";
import {View, StyleSheet, SafeAreaView, Text, ImageBackground} from "react-native";
import { Button } from '@ui-kitten/components';


export interface LandingProps {

}

export const LandingPresenter: React.FunctionComponent<LandingProps> = (props) => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/bg.jpeg")}
                style={{flex:1, height: undefined, width: undefined}}
            
            >
                <SafeAreaView>
                    <Text style={{color: "white", fontWeight: "bold", fontSize: 30, padding: 40}}>Hello</Text>
                    <Text style={{color: "white", fontWeight: "bold", fontSize: 30, paddingLeft: 40}}>Welcome</Text>
                </SafeAreaView>
                <View style={{flex:1, justifyContent: "flex-end", alignItems: "center", marginBottom: 100}}>
                    <Button status="control" style={{...styles.marginBottom, ...styles.actionButtons}} 
                        appearance="outline">
                        Signup
                    </Button>
                    <Button 
                    style={{...styles.marginBottom, ...styles.actionButtons, 
                            backgroundColor: "white", borderWidth: 0}} appearance="filled">
                        {<Text style={{color: "#FC5B3E", fontWeight: "bold", fontSize: "15%"}}>Sign In</Text> as any}
                    </Button>

                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </View>
                
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    marginBottom: {
        marginBottom: 10
    },
    forgotPassword: {
        color: "white",
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    actionButtons:{
        borderRadius: 40, 
        width: "70%",
        color: "white",
        padding: 100,
        height: 50
    }
})