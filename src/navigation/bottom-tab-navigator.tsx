import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import {  HomeScreen, TasksScreen, AddTodoScreen } from "../screens";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import { defaultColor } from "../constants";
import { defaultContext } from "../context";
import app from "../firebase";



export type RouteParamList = {
  start: undefined,
  login: undefined,
  signup: undefined,
  resetPassword: undefined,
  home: undefined,
  tasks: undefined,
  addTodo: undefined
}

export type LoginNavigationProps = {
  route: RouteProp<RouteParamList, "login">,
  navigation: {}
}

export type SignUpNavigationProps = {
  route: RouteProp<RouteParamList, "signup">,
  navigation: StackNavigationProp<RouteParamList, "signup">
}

const{Screen, Navigator} = createBottomTabNavigator<RouteParamList>();

const BottomTabBar = ({ navigation, state }:any) => {
    const context = React.useContext(defaultContext);
    const logout = async() => {
      Alert.alert("Logout", "Are you sure you want to logout", [
        {
          text: "Cancel",
          
        },
        {
          text:"Ok",
          onPress: () => {
            app.auth().signOut()
            navigation.navigate("start");
            context.user = null;
          }
        }
      ]);

    }
    return (
      <View style={{...styles.tabContainer, backgroundColor: 
        state.index !== 0 ? "white": context.tabContainerColor}}>
        <View style={styles.tabNav}>
          <FontAwesome name="home" onPress={() => navigation.navigate('home')} size={25} color="white"/>
          <FontAwesome onPress={() => navigation.navigate('tasks')} name="tasks" size={25} color="white"/>
          <AntDesign name="contacts" size={25} color="white"/>
          <AntDesign onPress={logout} name="poweroff" size={25} color="white"/>
          <Ionicons onPress={() => navigation.navigate('addTodo')} name="md-add-circle" size={60} color={defaultColor}/>
        </View>
      </View>
        
    )
};

export const BottomTabNavigator = (props: any) => {
    return (
        <Navigator initialRouteName="home" 
            tabBarOptions={{keyboardHidesTabBar: true}} tabBar={(props: any) => 
            <BottomTabBar {...props} />} >

          <Screen
            name="home"
            component={HomeScreen}
          />

            <Screen
            name="tasks"
            component={TasksScreen}
          />

          <Screen
            name="addTodo"
            component={AddTodoScreen}
          />
        </Navigator>
    )
}

const styles = StyleSheet.create({
  tabContainer: {
      height: "12%",
      backgroundColor: "#39305B",
      width: "100%",
      alignSelf:"center",
      padding:10,
      
  },
  tabNav: {
      borderRadius: 40,
      justifyContent:"space-evenly",
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      width: "90%",
      backgroundColor: "#49406F",
      alignSelf: "center",
      height: "90%"
  }
})