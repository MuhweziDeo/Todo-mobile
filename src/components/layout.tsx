import React from "react";
import {View, SafeAreaView, StyleSheet} from "react-native";
import { Avatar} from "react-native-elements";

export const Layout = ({children, headerRight, background}: any) => {
    return (
        <SafeAreaView style={{...styles.container, 
            backgroundColor: background ? background : "#39305B"}}>
            <View style={styles.content}>

            <View style={styles.header}>
                <Avatar
                    source={{uri: "https://i.pravatar.cc/300"}}
                    size="large"
                    containerStyle={{borderRadius: 20}}
                    avatarStyle={{borderRadius:20}}
                />

                {headerRight}
                
            </View>

            {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        
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
    
})