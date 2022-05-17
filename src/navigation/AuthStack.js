import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen'

import LoginScreennew from '../screens/LoginScreennew';
import SplashScreen from '../screens/SplashScreen'
import RegisterScreen from '../screens/RegisterScreen';
import AppStack from '../navigation/AppStack'


const Stack = createNativeStackNavigator();

const  AuthStack= () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen component={SplashScreen} name='SplashScreen'  />
        <Stack.Screen component={LoginScreennew} name='LoginScreennew'  />
        <Stack.Screen component={RegisterScreen} name='RegisterScreen'  />
 
        <Stack.Screen component={AppStack} name='AppStack'  />
      </Stack.Navigator>
    )
}


export default  AuthStack;