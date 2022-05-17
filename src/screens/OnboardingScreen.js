
import React from 'react';
import {Text, View, SafeAreaView , TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gamesvg from '../assets/gaming.svg'
const OnboardingScreen = ({navigation}) => {
    return (
      <SafeAreaView screenOptions= {{ headerShown:false}}
        style={{
        
        flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315', marginTop:20}}>
            GAMEON
          </Text>
        </View>
       <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
         
       <Gamesvg width={300} height={300} />
       </View>
       
        <TouchableOpacity
        onPress={() =>navigation.navigate('LoginScreen')}
          style={{
            backgroundColor:'#AD40AF',
            padding:20,
            width:'90%',
            borderRadius:5,
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:40
  
          }}
        >
               <Text style={{fontSize:18, fontWeight:"bold", color:'#fff'}}> Let Begin</Text>
               <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>
    );
  };


  export default OnboardingScreen;
  