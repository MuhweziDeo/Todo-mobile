import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen, LoginScreen, SignInScren, ForgotPasswordScreen } from "../screens";
import { RouteParamList } from './bottom-tab-navigator';


const Stack  = createStackNavigator<RouteParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="start" screenOptions={{headerShown: false}}>
         <Stack.Screen
            name="start"
            component={LandingScreen}
          />  

          <Stack.Screen
            name="login"
            component={LoginScreen}
            
          />

          <Stack.Screen
            name="signup"
            component={SignInScren}
           
          />

          <Stack.Screen
            name="resetPassword"
            component={ForgotPasswordScreen}
          />

    </Stack.Navigator>
  )
}
