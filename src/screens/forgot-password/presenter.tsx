import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Platform, KeyboardAvoidingView} from "react-native";
import {Entypo as Icon, Ionicons} from "@expo/vector-icons";
import { Input } from 'react-native-elements';
import {Button, Text as StyledText} from "@ui-kitten/components";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RouteParamList } from "../../navigation/bottom-tab-navigator";

import { defaultColor, height } from "../../constants";
import { LoadingIndicator } from "../../components";

export interface ForgotPasswordProps extends StackNavigationProp<RouteParamList, "login"> {
    email: string,
    onChangeEmail(email:string):void,
    emailError: string | undefined;
    submit():void,
    loading: boolean,
}

export const ForgotPasswordPresenter: React.FunctionComponent<ForgotPasswordProps> = ({onChangeEmail, 
    navigation, email, emailError, submit, loading}) => {
    const[visible, setVisible] = React.useState<boolean>(false);
    
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
         style={{backgroundColor: defaultColor, height: height}}>
            <SafeAreaView >
                <Ionicons onPress={() => navigation.goBack() } style={{marginLeft: 20, paddingTop: 20}} 
                name="ios-arrow-back" color="white" size={30}/>
            </SafeAreaView>
           <View style={{flex: 0.5, backgroundColor: defaultColor, justifyContent: "center", padding: 10}}>
           
                <SafeAreaView>
                    <Text style={styles.welcomeText}>Reset Password</Text>
                    <Text style={{...styles.welcomeText, fontSize: 15}}>We get it happens some times</Text>
                </SafeAreaView>
            
            </View>

            <View style={{flex: 1, backgroundColor: "white", padding: 20}}>
                <Input
                    label="Email"
                    labelStyle={styles.label}
                    placeholder='enter email'
                    leftIcon={<Icon name="mail" color={defaultColor} style={styles.icon} size={20}/>}
                    inputContainerStyle={{borderBottomColor: defaultColor}}
                    containerStyle={{marginBottom: 40, marginTop: 40}}
                    inputStyle={{fontSize: "15%" as any}}
                    onChangeText={(text) => onChangeEmail(text.toLocaleLowerCase())}
                    value={email}
                    errorMessage={emailError}
                />              

                <View style={styles.siginButtonContainer}>
                <Button accessoryLeft={() => loading ? <LoadingIndicator spinner={{status: "control"}}/> : <View/>}
                        onPress={submit} disabled={(email === "") || (emailError !== "") || loading} status="control" 
                        style={{...styles.siginButton, opacity: (email === "") || (emailError !== "") || loading ? 0.5: 1}} 
                        appearance="outline">
                    {<Text style={{fontSize: "15%" as any, color: "white"}}>Submit</Text> as any }
                </Button>
                </View>
                
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    label: {
        color: defaultColor,
        fontWeight: "200"
    },
    icon: {
        marginRight: 25,
        fontWeight: "200",
        marginLeft: -15
    },
    siginButton: {
        backgroundColor: defaultColor,
        borderRadius: 40,
        marginTop: 20,
        width: "60%",
        alignSelf: "center",
        height: 55,
        shadowColor: defaultColor,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        },
    siginButtonContainer: {
    },
    welcomeText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    }
})