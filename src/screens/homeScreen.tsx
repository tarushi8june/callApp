import { useEffect, useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function homeScreen({ route, navigation }: any) {
    const { userName,
        mobileNo,
        password,
        fromCustomer } = route.params;



    useEffect(() => {
        console.log("props on home screen", route.params)
    }, [route.params])

    const callPress = () => {
        navigation.navigate('callGenerate', {
            userName,
            mobileNo,
            password,
            fromCustomer
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.homePageTxt}>HOME PAGE</Text>
            <Text style={{
                color: 'black',
                fontSize: 12,
                textAlign: 'center',
                marginTop: 20
            }}>{fromCustomer ? 'Customer User' : 'Vendor User'}</Text>

            <Pressable style={styles.callPress}>
                <Text style={styles.callTxt}>Chat</Text>
            </Pressable>
            <Pressable style={styles.callPress}
                onPress={() => {
                    callPress()
                }}>
                <Text style={styles.callTxt}>Call</Text>
            </Pressable>
            <Pressable style={styles.logoutPress}
                onPress={() => {
                    navigation.navigate('login', {
                         fromLogout: true
                    })
                }}>
                <Text style={styles.callTxt}>LogOut</Text>
            </Pressable>

            {/* <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TextInput
                value={number}
                onChangeText={(value:any)=>{
                    setNumber(value)
                }}
                placeholder="Type Your Calling Number"
                maxLength={10}
                />
            </Modal> */}
        </View >
    )
};

export default homeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homePageTxt: {
        fontSize: 20,
        fontWeight: 'medium',
        textAlign: 'center',
        marginTop: 50,
        color: 'black'
    },
    callPress: {
        height: 40,
        width: '60%',
        backgroundColor: 'blue',
        borderRadius: 40,
        marginVertical: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    callTxt: {
        textAlign: 'center',
        color: 'white',
    },
    logoutPress: {
        height: 40,
        width: '60%',
        backgroundColor: 'red',
        borderRadius: 40,
        marginVertical: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});