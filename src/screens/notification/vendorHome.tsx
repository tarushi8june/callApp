// VendorHomeScreen.js
import notifee, { AndroidImportance } from '@notifee/react-native';
import React, { useEffect } from 'react';
import { Image, Pressable, Text, View } from 'react-native';


const VendorHomeScreen = ({ route, navigation }: any) => {

    useEffect(() => {
        const initializeNotifications = async () => {
            await notifee.createChannel({
                id: 'chat_channel',
                name: 'Chat Notifications',
                importance: AndroidImportance.HIGH,
            });
        };

        initializeNotifications();
    }, []);

    const sendNotificationToVendor = async () => {
        await notifee.displayNotification({
            title: 'New Chat Request',
            body: 'A vendor wants to start a chat.',
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
                <Text style={{
                    fontSize: 18,
                    color: 'black',
                    marginTop: 20,
                    alignSelf: 'center'

                }}>Start Chat With Your Customer</Text>

                <Image
                    style={{
                        height: 450,
                        width: 350

                    }}
                    source={require('../../assets/images/istockphoto-1219143039-1024x1024.jpg')} />
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

export default VendorHomeScreen;
