import React from "react";
import {View, SafeAreaView, StyleSheet, FlatList} from "react-native";
import { Avatar } from "react-native-elements";
import { defaultColor, height } from "../../constants";
import { ListItem } from 'react-native-elements'
import {  Text } from "@ui-kitten/components";
import {CheckBox} from "native-base";
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

export const TasksPresenter = (props: any) => {
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
                        <View style={{backgroundColor: "#8C8FFF", width: "100%", height: 20, marginBottom:10}}>
                            <Text style={{backgroundColor: defaultColor, width: "50%",color: "white"}}>
                                50%
                            </Text>
                        </View>
                    <Text status="warning" style={{textAlign: "center", fontWeight: "bold", fontSize: 20}}>Tasks</Text>     

                    <FlatList
                        data={[1,2,4,6,8,8,0]}
                        renderItem={({item, index}) => {
                          return  <ListItem
                            key={index}
                            title={"Go to school"}
                            // subtitle={"ddd"}
                            bottomDivider
                            leftElement={<CheckBox style={{marginLeft: -15, marginRight: 10}} color="success" checked={true} />}
                            rightElement={<Text>Yesterday</Text>}
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