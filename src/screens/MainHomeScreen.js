
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StatusBar, TextInput, Image, ImageBackground, StyleSheet } from 'react-native';
import HomeCardScreen from './HomeCardScreen';
import Feather from 'react-native-vector-icons/Feather'

import {
  Avatar,
  Title,
  Caption,
  Card,
  TouchableRipple,
} from 'react-native-paper';
const THEME_COLOR = '#fff';
export default function MainHomeScreen({ navigation }) {

  return (
    <>
      <StatusBar backgroundColor={THEME_COLOR} barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', marginTop: 30 }}>


        <View style={{ padding: 20, backgroundColor: '#fff' ,}}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

          }}>
           <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Feather name="align-left" size={25} color="gray" style={{ marginHorizontal: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <ImageBackground source={require('../assets/images/user-profile.jpg')} style={{ width: 40, height: 40, marginHorizontal: 5, marginTop: -5 }} imageStyle={{ borderRadius: 25 }} />
            </TouchableOpacity>


          </View>
          <View style={{ justifyContent: 'space-between', marginTop: 15, flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 20 }}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>
              Name : Rahul kumar
            </Text>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>
              Wallet : 5000
            </Text>
          </View>
          <View style={{ flexDirection: 'row',padding: 20, justifyContent: 'space-between',marginTop:20, marginBottom:-20 }}>
          <View>
            <Image source={require('../assets/home.jpg')} style={styles.Imageview} />
            <Text style={{ color: 'black', textAlign: 'center' }}>Home </Text>
          </View>
          <View>
            <Image source={require('../assets/download.png')} style={styles.Imageview} />
            <Text style={{ color: 'black', textAlign: 'center' }}> Grocery </Text>
          </View>
          <View>
            <Image source={require('../assets/bike.png')} style={styles.Imageview} />
            <Text style={{ color: 'black', textAlign: 'center' }}> E-Bike </Text>
          </View>
          <View>
            <Image source={require('../assets/imaLoan.png')} style={styles.Imageview} />
            <Text style={{ color: 'black', textAlign: 'center' }}> Loan </Text>
          </View>
        </View>
        </View>
        <ScrollView style={{backgroundColor:'#ecf0f1'}}>
        <HomeCardScreen/>
        </ScrollView>
         



      </SafeAreaView>

    </>
  )
}

const styles = StyleSheet.create({

  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,

    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  Imageview: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    marginHorizontal: 6,
    justifyContent: 'center',
    borderColor: "#ff8501",
  },



})