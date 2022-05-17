
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  Image,
  StatusBar,
 
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const THEME_COLOR = '#00A699';
const LoginScreennew = ({navigation}) => {
  const [data, setdata] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setdata({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setdata({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) =>{
    setdata({
      ...data,
      password: val,
     
    });
  }

  const updateTextSecureEntry = () =>{

    setdata({
      ...data,
       secureTextEntry: !data.secureTextEntry 
     
    });

  } 

  return (
      <>
       <StatusBar translucent backgroundColor="transparent" barStyle="white-content" />
    <View style={styles.container}>
      <View style={styles.header}>
      
        <Text style={styles.text_header}> Welcome!</Text>
        <Text
         style={{color:'#ecf0f1', fontWeight:'600', fontSize:15, marginHorizontal:5}}> Please Login As A Guest</Text>
      </View>
      <Animatable.View 
      animation="pulse"
      style={styles.footer}>
        <Text style={styles.text_footer}>User Name</Text>
        <View style={styles.action}>
          <FontAwesome name="user" color="gray" size={20} />
          <TextInput
            placeholder="Enter your user name"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="gray" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 20,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="gray" size={20} />
          <TextInput
            placeholder="Your Password"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false }
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity
           onPress={updateTextSecureEntry }
          >
          {data.secureTextEntry ? 
          <Feather name="eye-off" color="gray" size={20} />
          :
          <Feather name="eye" color="gray" size={20} /> }

          </TouchableOpacity>
   
        </View>
        <View style={styles.button}>
        <TouchableOpacity
                 style={styles.signIn} 
                 onPress={() => navigation.navigate('AppStack')}
        >
        <LinearGradient
          colors={['gray', 'rgba(8, 212, 196, 1)']}
          style={styles.signIn}
         >
         <Text style={[styles.textSign,{
           color:'#fff'
         }]}>
          Log In
         </Text>
        </LinearGradient>
        </TouchableOpacity>


        <Text
         style={{color:'gray', fontWeight:'600', fontSize:14, marginHorizontal:5, marginTop:10}}> Want Guest Login ? Click Login</Text>
      

        </View>

      
      </Animatable.View>
    </View>
    </>
  );
};

export default LoginScreennew;
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'gray'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'gray',
    marginHorizontal:20
  },
  image: {
    width:'100%',
    height: 301,
    position: 'absolute',
    resizeMode:'cover'
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal:60
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});