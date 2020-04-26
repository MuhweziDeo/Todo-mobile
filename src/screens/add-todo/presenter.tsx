import React from "react";
import {StyleSheet, Text, View, SafeAreaView, Platform, KeyboardAvoidingView, Keyboard} from "react-native";
import {Entypo as Icon, Ionicons, MaterialIcons} from "@expo/vector-icons";
import { Input } from 'react-native-elements';
import {Button} from "@ui-kitten/components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';


import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RouteParamList } from "../../navigation/bottom-tab-navigator";

import { defaultColor, height } from "../../constants";
import { LoadingIndicator } from "../../components";

export interface ForgotPasswordProps extends StackNavigationProp<RouteParamList, "login"> {
    description: string,
    onChangeDescription(email:string):void,
    descriptionError: string | undefined;
    date:string,
    onChangeDate(date:Date):void,
    dateError: string | undefined
    submit():void,
    loading: boolean,
}

export const AddTodoPresenter: React.FunctionComponent<ForgotPasswordProps> = ({onChangeDescription, 
    navigation, description, descriptionError, submit, loading, onChangeDate, date, dateError}) => {
    const[visible, setVisible] = React.useState<boolean>(false);
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{backgroundColor: defaultColor, height: height, flex:1}}>
            <SafeAreaView >
                <Ionicons onPress={() => navigation.goBack() } style={{marginLeft: 20, paddingTop: 40}} 
                name="ios-arrow-back" color="white" size={30}/>
            </SafeAreaView>
           <View style={{flex: 0.5, backgroundColor: defaultColor, justifyContent: "center", padding: 10}}>
           
                <SafeAreaView>
                    <Text style={styles.welcomeText}>Add Todo</Text>
                    <Text style={{...styles.welcomeText, fontSize: 15}}>Create your todo to Keep Track</Text>
                </SafeAreaView>
            
            </View>

            <View style={{flex: 1, backgroundColor: "white", padding: 20}}>
                <Input
                    label="Description"
                    labelStyle={styles.label}
                    placeholder='enter description'
                    leftIcon={<MaterialIcons name="description" color={defaultColor} style={styles.icon} size={20}/>}
                    inputContainerStyle={{borderBottomColor: defaultColor}}
                    containerStyle={{marginBottom: 20, marginTop: 20}}
                    inputStyle={{fontSize: 15}}
                    onChangeText={(text) => onChangeDescription(text.toLocaleLowerCase())}
                    value={description}
                    errorMessage={descriptionError}
                /> 

                <Input
                    label="Due Date"
                    labelStyle={styles.label}
                    placeholder='Date'
                    leftIcon={<MaterialIcons name="date-range" color={defaultColor} style={styles.icon} size={20}/>}
                    inputContainerStyle={{borderBottomColor: defaultColor}}
                    containerStyle={{marginBottom: 40, marginTop: 5}}
                    inputStyle={{fontSize: 15}}
                    value={date.toString()}
                    errorMessage={dateError}
                    disabled
                    
                /> 
                <Button status="warning" onPress={() => setVisible(!visible)} appearance="outline" size="small">
                    
                    {date === "" ? "Select Date" : "Change Date"}
                </Button>

                <DateTimePickerModal
                    isVisible={visible}
                    mode="datetime"
                    onConfirm={(date) => {
                        onChangeDate(date);
                        setVisible(false);
                        Keyboard.dismiss();
                    }}
                    onCancel={() => setVisible(false)}
                />
                <View style={styles.siginButtonContainer}>
                <Button accessoryLeft={() => loading ? <LoadingIndicator spinner={{status: "control"}}/> : <View/>}
                        onPress={submit} 
                        disabled={
                            (description === "") || (date === "") ||
                            (descriptionError !== "") || loading} 
                            status="control" 
                            style={{...styles.siginButton, 
                            opacity: (description === "") || (date === "") || (descriptionError !== "") || loading ? 0.5: 1}} 
                        appearance="outline">
                    {<Text style={{fontSize: 15, color: "white"}}>Save</Text> as any }
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