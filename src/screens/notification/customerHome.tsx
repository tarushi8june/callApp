// CustomerHomeScreen.js
import notifee, { AndroidImportance } from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const CustomerHomeScreen = ({ route, navigation }: any) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        const initializeNotifications = async () => {
            await notifee.createChannel({
                id: 'chat_channel',
                name: 'Chat Notifications',
                importance: AndroidImportance.HIGH,
            });

        };

        initializeNotifications();
        getUsers()
    }, []);


    const getUsers = async () => {
        const number = await AsyncStorage.getItem('Number');
        let tempData: any = []
        firestore()
            .collection('users')
            .where('number', '==', number)
            .get()
            .then(res => {
                if (res.docs !== []) {
                    res.docs.map(item => {
                        tempData.push(item.data())
                    })
                    setUsers(tempData)
                }
            })

    }


    const sendNotificationToVendor = async () => {
        await notifee.displayNotification({
            title: 'New Chat Request',
            body: 'A customer wants to start a chat.',
            android: {
                channelId: 'chat_channel',
            },
        });
    };

    return (
        <View style={{
        }}>
            <View style={{
                alignSelf: 'center',
                marginTop: 100
            }}>
                <Pressable onPress={sendNotificationToVendor}
                    style={{
                        height: 40,
                        width: 150,
                        backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Start Chat
                    </Text>
                </Pressable>
                <FlatList
                    data={users}
                    renderItem={(item: any, index: any) => {
                        console.log("flatlist data print 9998888888", item?.item?.data)
                        return <Pressable style={styles.userItem} onPress={() => {
                            navigation.navigate('chat', item.item)
                        }}>
                            <Image
                                source={require('../../assets/images/user.png')}
                                style={styles.userIcon} />
                            <Text style={styles.userName}>{item.item.name}</Text>
                        </Pressable>
                    }
                    } />
                {/* <Text style={{
                    fontSize: 18,
                    color: 'black',
                    marginTop: 20,
                    alignSelf: 'center'

                }}>Start Chat With Your Vendor</Text>

                <Image
                    style={{
                        height: 450,
                        width: 350

                    }}
                    source={require('../../assets/images/istockphoto-1219143039-1024x1024.jpg')} /> */}
            </View>
            <Pressable onPress={() => {
                navigation.goBack();
            }}>
                <Text style={{
                    fontSize: 18,
                    color: 'black',
                    marginTop: 20,
                    alignSelf: 'center'

                }}>GO Back</Text>
            </Pressable>
        </View>
    );
};

export default CustomerHomeScreen;
const styles = StyleSheet.create({
    userItem: {
        width: Dimensions.get('window').width - 50,
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        height: 60,
        borderWidth: 0.5,
        borderRadius: 10,
        paddingLeft: 20,

    },
    userIcon: {
        height: 40,
        width: 40
    },
    userName: {
        fontSize: 18,
        color: 'black',
        paddingLeft: 10
    }
})