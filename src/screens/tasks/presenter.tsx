import React from "react";
import {View, SafeAreaView, StyleSheet, FlatList} from "react-native";
import { Avatar } from "react-native-elements";
import { defaultColor, height } from "../../constants";
import { ListItem } from 'react-native-elements'
import {  Text } from "@ui-kitten/components";
import {CheckBox} from "native-base";
import { Todo } from ".";
import moment from "moment";
import { LoadingIndicator } from "../../components";


const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

export interface Props {
    todos: Todo[],
    complete(index: number):void,
    loading: boolean
}

export const TasksPresenter: React.FunctionComponent<Props> = ({todos, complete, loading}) => {
    const completion = () => {
        const completed = todos.filter((todo) => todo.completed);
        const count = completed.reduce((x, y) => x+1,0);
        const percentage = (count/todos.length) * 100;
        return Math.round(percentage) || 0;

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                    <View style={styles.header}>
                        <Avatar
                            source={{uri: "https://i.pravatar.cc/300"}}
                            size="large"
                            containerStyle={{borderRadius: 20}}
                            avatarStyle={{borderRadius:20}}
                        />

                        <View style={{justifyContent: "center"}}>
                            <View style={styles.timeFrame}>
                                <Text style={styles.datePercentage}>{month[new Date().getMonth()]}</Text>
                                <Text style={styles.datePercentage}>{new Date().getFullYear()}</Text>
                            </View>

                        </View>
                        
                    </View>

                    <View style={{backgroundColor: "white", height:height * 0.8, 
                        borderTopRightRadius: 40,
                        borderTopLeftRadius: 40,
                        padding: 30
                        }}>
                        <Text style={{ 
                                color: defaultColor, 
                                textAlign:"center", fontSize: 20}}>
                                {completion() +  '%'}
                        </Text>
                    <Text status="warning" style={{textAlign: "center", fontWeight: "bold", fontSize: 20}}>Tasks</Text>
                    {loading && <LoadingIndicator style={{alignSelf: "center"}} size="large"/>}

                    <FlatList
                        data={todos}
                        renderItem={({item, index}) => {
                            const{description, dueDate, completed, id} = item;
                          return  <ListItem
                            key={id}
                            title={description}
                            bottomDivider
                            leftElement={<CheckBox disabled={loading} color="green" onPress={() => complete(index)} style={{marginLeft: -15, marginRight: 10}} 
                                checked={completed} />}
                            rightElement={<Text>{moment(dueDate.toDate()).format('D MM YYYY')}</Text>}
                        />
                        }}
                    />   
                    </View>
                
               
                
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: defaultColor
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 60,
    },
    content: {
    },
    timeFrame: {
        flexDirection: "row",
        width:"100%",
        justifyContent: "space-evenly",
        
    },
    datePercentage: {
        fontSize: 22,
        color: "white"
    }
});