
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StatusBar, TextInput, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Button, Badge } from 'react-native-paper';

const THEME_COLOR = '#fff';
export default function HomeCardScreen({ navigation }) {

    return (
        <>
            <StatusBar backgroundColor={THEME_COLOR} barStyle="dark-content" />

            <View style={{
                flexDirection: 'row', marginTop: 15, padding: 20

            }}>

                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} >
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={{ flex: 2, width: '100%', height: 250, backgroundColor: '#fff', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, resizeMode: 'contain', marginHorizontal: 15 }}
                    />
                </View>


                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 3, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} >

                    <Text style={{ fontSize: 15, paddingLeft: 15, color: 'black', fontWeight: 'bold', marginTop: 30 }}>
                        2 bhk - Flat
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                        marginTop: 5
                    }}>
                        <Text style={{ Color: '#2c3e50', fontSize: 15, fontWeight: 'bold', }} >
                            <FontAwesome name="bed" size={15} color="gray" />  2 </Text>
                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', }}>  {'\u20B9'}2000/-</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 5 }}>

                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                            Address: <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#8e44ad' }}>
                                Canada Building A1 Near Hospital
                            </Text>
                        </Text>




                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', padding: 20, marginTop:-20,

            }}>

                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} >
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={{ flex: 2, width: '100%', height: 250, backgroundColor: '#fff', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, resizeMode: 'contain', marginHorizontal: 15 }}
                    />
                </View>


                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 3, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} >

                    <Text style={{ fontSize: 15, paddingLeft: 15, color: 'black', fontWeight: 'bold', marginTop: 30 }}>
                        2 bhk - Flat
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                        marginTop: 5
                    }}>
                        <Text style={{ Color: '#2c3e50', fontSize: 15, fontWeight: 'bold', }} >
                            <FontAwesome name="bed" size={15} color="gray" />  2 </Text>
                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', }}>  {'\u20B9'}2000/-</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 5 }}>

                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                            Address: <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#8e44ad' }}>
                                Canada Building A1 Near Hospital
                            </Text>
                        </Text>




                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', padding: 20, marginTop:-20,

            }}>

                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} >
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={{ flex: 2, width: '100%', height: 250, backgroundColor: '#fff', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, resizeMode: 'contain', marginHorizontal: 15 }}
                    />
                </View>


                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 3, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} >

                    <Text style={{ fontSize: 15, paddingLeft: 15, color: 'black', fontWeight: 'bold', marginTop: 30 }}>
                        2 bhk - Flat
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                        marginTop: 5
                    }}>
                        <Text style={{ Color: '#2c3e50', fontSize: 15, fontWeight: 'bold', }} >
                            <FontAwesome name="bed" size={15} color="gray" />  2 </Text>
                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', }}>  {'\u20B9'}2000/-</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 5 }}>

                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                            Address: <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#8e44ad' }}>
                                Canada Building A1 Near Hospital
                            </Text>
                        </Text>




                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', padding: 20, marginTop:-20,

            }}>

                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} >
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={{ flex: 2, width: '100%', height: 250, backgroundColor: '#fff', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, resizeMode: 'contain', marginHorizontal: 15 }}
                    />
                </View>


                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 3, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} >

                    <Text style={{ fontSize: 15, paddingLeft: 15, color: 'black', fontWeight: 'bold', marginTop: 30 }}>
                        2 bhk - Flat
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                        marginTop: 5
                    }}>
                        <Text style={{ Color: '#2c3e50', fontSize: 15, fontWeight: 'bold', }} >
                            <FontAwesome name="bed" size={15} color="gray" />  2 </Text>
                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', }}>  {'\u20B9'}2000/-</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 5 }}>

                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                            Address: <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#8e44ad' }}>
                                Canada Building A1 Near Hospital
                            </Text>
                        </Text>




                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row', padding: 20, marginTop:-20, marginBottom:40

            }}>

                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} >
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                        style={{ flex: 2, width: '100%', height: 250, backgroundColor: '#fff', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, resizeMode: 'contain', marginHorizontal: 15 }}
                    />
                </View>


                <View style={{ width: 50, height: 160, backgroundColor: '#fff', flex: 3, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} >

                    <Text style={{ fontSize: 15, paddingLeft: 15, color: 'black', fontWeight: 'bold', marginTop: 30 }}>
                        2 bhk - Flat
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 20,
                        marginTop: 5
                    }}>
                        <Text style={{ Color: '#2c3e50', fontSize: 15, fontWeight: 'bold', }} >
                            <FontAwesome name="bed" size={15} color="gray" />  2 </Text>
                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', }}>  {'\u20B9'}2000/-</Text>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 15, marginTop: 5 }}>

                        <Text style={{ Color: 'black', fontSize: 15, fontWeight: 'bold', textAlign: 'left' }}>
                            Address: <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#8e44ad' }}>
                                Canada Building A1 Near Hospital
                            </Text>
                        </Text>




                    </View>
                </View>
            </View>
            
            
           





        </>
    )
}

const styles = StyleSheet.create({
    Imageview: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1,
        marginHorizontal: 6,
        borderColor: "#2c3e50",
    },
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
    mainCardView: {


        backgroundColor: 'white',
        borderRadius: 15,

        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',

        marginHorizontal: 10
    },



})