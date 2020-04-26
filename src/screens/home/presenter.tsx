import React from "react";
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from "react-native";
import {Ionicons,MaterialIcons} from "@expo/vector-icons";
import {Card, Avatar} from "react-native-elements";
import { defaultContext } from "../../context";
import { Layout } from "../../components/layout";

export const HomePresenter = (props: any) => {
    const context = React.useContext(defaultContext);
    return (
        <Layout headerRight={<View style={{alignContent: "center", alignSelf: "center"}}>
        <Text style={styles.email}>{context.user?.email}</Text>
        <Text style={{...styles.email, fontSize: 14, marginTop: 10, color: "#877fd1"}}>Creative Designer</Text>
        </View>}>
           

            <View style={styles.recentProjects}>
                <Text style={{...styles.recentTitle, color: "#716992"}}>Recent <Text style={styles.recentTitle}>Projects</Text></Text>
               <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: "row"}}>
                   <Card containerStyle={{...styles.card, backgroundColor: "#10C3BF"}}>
                       
                        <MaterialIcons name="pie-chart" style={{alignSelf: "center"}} color="white" size={60}/>
                       <Text style={styles.date}>15 March 2020</Text>
                       <Text style={styles.text}>Custom Prints</Text>
                   </Card>

                   <Card containerStyle={{...styles.card, backgroundColor: "#ff8989"}}>
                       <Ionicons style={{alignSelf: "center"}} color="white" name="ios-cube" size={60}/>

                       <Text style={styles.date}>15 March 2020</Text>
                       
                       <Text style={styles.text}>Custom Prints</Text>
                   </Card>

                   <Card containerStyle={{...styles.card, backgroundColor: "#8C8FFF"}}>
                    <Ionicons style={{alignSelf: "center"}} color="white" name="ios-lock" size={60}/>
                       <Text style={styles.date}>15 March 2020</Text>
                      
                       <Text style={styles.text}>Custom Prints</Text>
                   </Card>
               </ScrollView>
            </View>

            {/*  */}
            <View style={{...styles.recentProjects}}>
                <Text style={{...styles.recentTitle, color: "#716992"}}>Recent <Text style={styles.recentTitle}>Projects</Text></Text>
               <ScrollView showsHorizontalScrollIndicator={false} style={{marginTop: 10}}>
                   <View style={{flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap"}}>
                    <View style={{marginBottom: 15, width: "50%"}}>
                            <Ionicons style={{backgroundColor: "#fdc35d", width: "45%", padding:15}} color="white" name="ios-lock" size={35}/>
                            <Text style={styles.date}>15 March 2020</Text>
                            <Text style={styles.text}>Custom Prints</Text>
                    </View>
                    <View style={{marginBottom: 15, width: "50%"}}>
                            <Ionicons style={{backgroundColor: "#10C3BF", width: "45%", padding:15}} color="white" name="ios-lock" size={35}/>
                            <Text style={styles.date}>15 March 2020</Text>
                            <Text style={styles.text}>Custom Prints</Text>
                    </View>

                    <View style={{marginBottom: 15, width: "50%"}}>
                        <Ionicons style={{backgroundColor: "#8C8FFF", width: "45%", padding:15}} color="white" name="ios-lock" size={35}/>
                        <Text style={styles.date}>15 March 2020</Text>
                        <Text style={styles.text}>Custom Prints</Text>
                   </View>

                   <View style={{marginBottom: 15, width: "50%"}}>
                        <Ionicons style={{backgroundColor: "#8C8FFF", width: "45%", padding:10}} color="white" name="ios-lock" size={35}/>
                        <Text style={styles.date}>15 March 2020</Text>
                        <Text style={styles.text}>Custom Prints</Text>
                   </View>
                   </View>
               </ScrollView>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#39305B",
        
    },
    content: {
        padding: 30
    },
    header: {
        flexDirection: "row",
    },
    email: {
        color: "white",
        marginLeft: 25,
        alignSelf: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    recentProjects: {
        marginTop: 30
    },
    recentTitle: {
        color: "white",
        fontSize:28,
        fontWeight: "bold"
    },
    card:{
        padding: 20,
        width: "35%", 
        height: 200, 
        flexWrap: "wrap", 
        justifyContent: "center",
        borderWidth:0,
        borderRadius: 20

    },
    date: {
        color: "white",
        marginTop: 10,
        fontWeight: "300",
        fontSize: 15
    },
    text: {
        fontWeight: "bold",
        marginTop:10,
        color: "white"
    }
})