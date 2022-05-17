/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground, TextInput, Image, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';
import { sliderData } from '../model/data';

export default function HomeScreen({ navigation }) {



    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />;
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20
                }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#20315" }}>
                        Hi Shrikant
                    </Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground source={require('../assets/images/user-profile.jpg')} style={{ width: 35, height: 35 }} imageStyle={{ borderRadius: 25 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', borderColor: '#C6C6C6', borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 }}>
                    <Feather name='search' size={20} color="#20315" style={{ marginRight: 5, marginTop: 13 }} />
                    <TextInput placeholder='Search' />
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <Image source={require('../assets/images/back.png')} style={styles.Imageview} />
                        <Image source={require('../assets/images/FarCry6.png')} style={styles.Imageview} />
                        <Image source={require('../assets/images/god-of-war.jpeg')} style={styles.Imageview} />
                        <Image source={require('../assets/images/miles-morales.webp')} style={styles.Imageview} />
                        <Image source={require('../assets/images/FarCry6.png')} style={styles.Imageview} />
                        <Image source={require('../assets/images/diablo-4.jpeg')} style={styles.Imageview} />
                        <Image source={require('../assets/images/back.png')} style={styles.Imageview} />
                    </ScrollView>

                </View>

                <View
                    style={{
                        marginVertical: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }
                    }>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#20315" }}>
                        Expiring Warrenty
                    </Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: '#0aada8' }}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Carousel

                        data={sliderData}
                        renderItem={renderBanner}
                        sliderWidth={windowWidth - 40}
                        itemWidth={300}
                        loop={true}
                    />
                    <View style={{
                        flex: 1, flexDirection: 'row', marginTop: 15, padding: 10

                    }}>

                        <View style={{ width: 50, height: 150, backgroundColor: '#fff', flex: 2, borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} >
                            <Image
                                source={require("../assets/images/FarCry6.png")}
                                style={{ flex: 1, width: '100%', height: '100%', backgroundColor: '#fff', borderTopLeftRadius: 15, borderBottomLeftRadius: 15, resizeMode:'cover' }}
                            />
                        </View>


                        <View style={{ width: 50, height: 150, backgroundColor: 'skyblue', flex: 4, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} />

                    </View>

                </ScrollView>



            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Imageview: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2,
        marginHorizontal: 6,
        borderColor: "#ff8501"
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }


})