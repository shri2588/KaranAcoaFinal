

/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function SettingScreen({navigation}) {

    return (
        <>
            <View style={{ padding: 20, backgroundColor: '#fff' , marginTop:30}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <FontAwesome name="arrow-left" size={20} color="graY" style={{ marginHorizontal: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={{ backgroundColor: '#fff' }}>
    
                        <>
                        <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 30, justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>About This APP</Text>
                              
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 30, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                                ACOE accommodation is the only app you’ll need for booking your student accommodation, groceries, transport, home services, jobs and loans.
                                ACOE accommodation is a free service for booking student accommodation and other services With over one thousand beds in over 400 cities worldwide, you can find an ideal place to stay during your studies, and book quickly and easily. We seek to simplify the student housing booking process which puts security and ease-of-use first. Whether you’re looking for a long-term or a short-term let, find your home away from home with us today! And also use few new exclusive services.
                                </Text>
                                
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 30 }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Easy-to-use accommodation search: <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                - Search by country, city, university or neighbourhood
                                </Text></Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 30 }}>
                                 <Text style={{ fontSize: 15, fontWeight: '500' }}>
                               -  Use our maps to find properties in a particular area
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 30 }}>
                                 <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                 - Compare properties to find the perfect one for you
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 30 }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Filters help find what you are looking for: <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                - Check which properties have free wifi
                                </Text></Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 30 }}>
                                 <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                 - Look for studios with ensuite bathrooms or shared accommodation with flatmates
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 30 }}>
                                 <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                 - Find the best rated properties when you filter by review
                                </Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginHorizontal: 30, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                                We know that booking a student room can be a daunting task, especially if you are going abroad. That’s why we’ve taken steps to make sure that with ACOE accommodation, choosing your property is as easy and stress-free as possible.
                                </Text>
                                
                            </View>
                          
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 30 }}>
                                 <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                 - We vet and approve every housing provider we feature
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 30 }}>
                                 <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                 - Our dedicated booking consultants are always there to help
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 30 }}>
                                 <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                 - Price match promise: Find a lower price elsewhere and we’ll match it*
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 30 }}>
                                 <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                 - Can use the other services like groceries, transport, home services, loan etc.
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 30, marginBottom:60 }}>
                                 <Text style={{ fontSize: 15, fontWeight: '500' }}>
                                 If you love the ACOE accommodation app, we’d love to hear about it, so do leave us a review. You can also visit our website and follow us on social media.
                                </Text>
                            </View>
                        </>
             

                    

            </ScrollView>
        </>
    );
}
