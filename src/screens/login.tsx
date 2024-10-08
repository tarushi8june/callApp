import { useEffect, useId, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage'

function login({ route, navigation }: any) {
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState();

    const loginUser = () => {
        firestore()
            .collection('users')
            .where('number', '==', mobileNo)
            .get()
            .then(res => {
                if (res.docs) {
                    console.log("loginuser res 000000", res.docs)
                    console.log("loginuser res 2323232", res)
                    res.docs.map(e => {
                        console.log("MAP data 1111111", e.data)
                        console.log("MAP data 0000", e.data.number)
                        console.log("MAP data 8888", e.data.name)
                        console.log("MAP data 9999", e.data.userId)
                        let data = e.data();
                        console.log("MAP data 0987655", data)

                        gotoNext(data.name, data.number, data.userId)
                    })

                } else {
                    Alert.alert("User Not Found")
                    console.log("loginuser res 111111", JSON.stringify(res.docs))
                }
            })
            .catch(err => {
                Alert.alert("An error occurred. Please try again.");
            })
    };


    const gotoNext = async (name: any, number: any, userId: any) => {
        await AsyncStorage.setItem('Name', name)
        await AsyncStorage.setItem('Number', number)
        await AsyncStorage.setItem('userId', userId)
        navigation.navigate('homeScreen', {
            userName: '',
            mobileNo: 'number',
            password: '',
            fromCustomer: true
        })
    }

    useEffect(() => {
        //props
        setMobileNo('')
        setPassword(undefined)
    }, [route])


    const renderTxt = (text: any) => {
        return (
            <Text style={styles.renderTxt}>{text}</Text>
        )
    }

    const renderError = (text: any) => {
        return <Text style={styles.renderErrorTxt}>{text}</Text>
    }

    return (
        <View>
            <Text style={styles.loginTxt}>Customer Login</Text>
            <View style={styles.inputView}>
                <View style={styles.container}>
                    {renderTxt('Mobile No.')}
                    <TextInput
                        value={mobileNo}
                        style={styles.inputStyle}
                        onChangeText={(value: any) => {
                            setMobileNo(value)
                        }}
                        keyboardType="numeric"
                        placeholder="Type Your Mobile No."
                        maxLength={10} />
                </View>

                <View style={styles.container}>
                    {renderTxt('Password')}
                    <TextInput
                        value={password}
                        style={styles.userNameField}
                        onChangeText={(value: any) => {
                            setPassword(value)
                        }}
                        placeholder="Type Your Password"
                        maxLength={10} />

                </View>
            </View>

            <Pressable style={[styles.loginPress, {
                backgroundColor: mobileNo == undefined && password == undefined ? 'gray' : 'blue',
            }]}
                disabled={mobileNo == undefined ? true : false}
                onPress={() => {

                    loginUser()

                    // navigation.navigate('homeScreen', {
                    //     userName: userName,
                    //     mobileNo: mobileNo,
                    //     password: password,
                    //     fromCustomer: true
                    // })

                }}>
                <Text style={styles.loginButtonTxt}>LOGIN</Text>
            </Pressable>

            <Pressable onPress={() => {
                navigation.navigate('vendorLogin')
            }}>
                <Text style={styles.vendorTxt}>
                    or Login For Vendor
                </Text>
            </Pressable>
            <Pressable onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.goBackTxt}>
                    or GoBack
                </Text>
            </Pressable>
        </View>
    )
};

export default login;
const styles = StyleSheet.create({
    loginTxt: {
        color: 'black',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 80,
        fontWeight: 'bold'
    },
    inputStyle: {
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        width: '80%',
        alignSelf: 'center',
        color: 'black'

    },
    userNameField: {
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 2,
        width: '80%',
        alignSelf: 'center',
        color: 'black'
    },
    loginPress: {
        height: 40,
        width: '80%',
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: 50,
        justifyContent: 'center'
    },
    loginButtonTxt: {
        textAlign: 'center',
        color: 'white'
    },
    inputView: {
        marginTop: 40
    },
    container: {
        marginVertical: 20,
    },
    renderTxt: {
        color: 'black',
        marginLeft: 40
    },
    vendorTxt: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 30,
        color: 'black'
    },
    renderErrorTxt: {
        fontSize: 10,
        color: 'red',
        marginTop: 2,
        marginLeft: 40
    },
    goBackTxt: {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        color: 'black'
    }
})