import React, {useState} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import MessageScreen from '../screens/MessageScreen'
import MomentScreen from '../screens/MomentScreen' 
import MainHomeScreen from '../screens/MainHomeScreen';
import SettingScreen from '../screens/SettingScreen'

import TabNavigator from './TabNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
const Drawer = createDrawerNavigator();

const  AppStack= () => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} 
        screenOptions={{
          headerShown:false,
          drawerActiveBackgroundColor: 'gray',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      
          
        }}>

        <Drawer.Screen component={TabNavigator} name='Home'  options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}  />
        <Drawer.Screen component={ProfileScreen} name='My Bookings'  options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ios-bookmarks" size={22} color={color} />
          ),
        }}  />
        <Drawer.Screen component={ProfileScreen} name='My Details'  options={{
          drawerIcon: ({color}) => (
            <Feather name="user" size={22} color={color} />
          ),
        }}  />
        <Drawer.Screen component={ProfileScreen} name='Wallet Balance'  options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ios-wallet" size={22} color={color} />
          ),
        }}  />
        <Drawer.Screen component={ProfileScreen} name='Wishlist' 
         options={{
          drawerIcon: ({color}) => (
            <Feather name="inbox" size={22} color={color} />
          ),
        }} />
        <Drawer.Screen component={MessageScreen} name='Recharge' 
          options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
          ),
        }} />
        <Drawer.Screen component={MomentScreen} name='Change Language' 
         options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }} />
        <Drawer.Screen component={SettingScreen} name='Service' 
         options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }} />
       
        <Drawer.Screen component={SettingScreen} name='Help Center' 
         options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }} />
  
      </Drawer.Navigator>
    )
}


export default  AppStack;