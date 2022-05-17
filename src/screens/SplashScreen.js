import React from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image, ImageBackground, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';

const THEME_COLOR = '#fff';
const SplashScreen = ({ navigation }) => {
    return (
        <>
        <StatusBar backgroundColor={THEME_COLOR} barStyle="dark-content"   />
        <View style={styles.container}>

            <View style={styles.header}>

                <Animatable.Image
                    animation="bounceIn"

                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />


              <View>
              <Text style={styles.title}>
               We Provide Best Accomondation in 
            </Text>
            <Text style={styles.text}>
           Abroad
            </Text>
            <Text style={styles.text2}>
                  For Indian Students
                </Text>
              </View>
              <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('LoginScreennew')}>
            <LinearGradient
             colors={['gray', 'gray']}
             style={styles.signIn}

            >
                <Text style={styles.textSign}>
                    Get Started
                </Text>
              
                <MaterialIcons 
                 name="navigate-next"
                 color='#fff'
                 size={20}
                 />
            </LinearGradient>

            </TouchableOpacity>
            </View>
            </View>

            


        </View>
        </>

    )
}
/* Rectangle 15 */


export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:'#fff'

    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
   
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold', 
        marginTop:15
    },
    text: {
        color: 'grey',
        marginTop: 30,
        fontSize:30,
         fontWeight:'bold',
          textAlign:'center'
    },
    text2: {
        color: 'grey',
        marginTop: 5,
        fontSize:15,
         fontWeight:'bold',
          textAlign:'center'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 40
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
   
});