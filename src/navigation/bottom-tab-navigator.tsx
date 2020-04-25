import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { RouteProp } from '@react-navigation/native';

import { LandingScreen, LoginScreen } from "../screens";

export type RouteParamList = {
  start: undefined,
  login: undefined
}

export type LoginNavigationProps = {
  route: RouteProp<RouteParamList, "login">,
  navigation: {}
}

const{Screen, Navigator} = createBottomTabNavigator<RouteParamList>();

// TODO Add Navigation Props


const BottomTabBar = ({ navigation, state }:any) => {
    return (
        <BottomNavigation
            style={{height: 100}}
          selectedIndex={state.index}
          onSelect={index => navigation.navigate(state.routeNames[index])}>
          <BottomNavigationTab title='start'/>
          <BottomNavigationTab title='login'/>
        </BottomNavigation>
    )
};

export const BottomTabNavigator = (props: any) => {
    return (
        <Navigator tabBar={(props: any) => <BottomTabBar {...props} />} >
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
          />
            
        </Navigator>
    )
}