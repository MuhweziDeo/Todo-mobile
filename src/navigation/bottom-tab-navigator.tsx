import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { RouteProp } from '@react-navigation/native';

import { LandingScreen, LoginScreen, SignInScren } from "../screens";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";

export type RouteParamList = {
  start: undefined,
  login: undefined,
  signup: undefined
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
    return (
        <BottomNavigation
            style={{height: 100}}
          selectedIndex={state.index}
          onSelect={index => navigation.navigate(state.routeNames[index])}>
          <BottomNavigationTab title='start'/>
          <BottomNavigationTab title='login'/>
          <BottomNavigationTab title='signin'/>
        </BottomNavigation>
    )
};

export const BottomTabNavigator = (props: any) => {
    return (
        <Navigator tabBarOptions={{keyboardHidesTabBar: true}} tabBar={(props: any) => <BottomTabBar {...props} />} >
          <Screen
            name="start"
            component={LandingScreen}
            options={{
                tabBarVisible: false,
            }}
          />  

          <Screen
            name="login"
            component={LoginScreen}
            options={{
              tabBarVisible: false,
          }}
          />

            <Screen
            name="signup"
            component={SignInScren}
            options={{
              tabBarVisible: false,
          }}
          />
            
        </Navigator>
    )
}