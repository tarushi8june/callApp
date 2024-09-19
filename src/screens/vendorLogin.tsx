import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";


function vendorLogin({ route, navigation }: any) {

    const [mobileNo, setMobileNo] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [showError, setShowError] = useState<boolean>(false)

    useEffect(() => {
        if (userName != undefined || mobileNo != undefined || password != undefined) {
            setShowError(false)
        }
    }, [password, userName, mobileNo])

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
            <Text style={styles.loginTxt}>Vendor Login</Text>
            <View style={styles.inputView}>
                <View style={styles.container}>
                    {renderTxt('Username')}
                    <TextInput
                        value={userName}
                        style={styles.userNameField}
                        onChangeText={(value: any) => {
                            setUserName(value)
                        }}
                        placeholder="Type Your UserName"
                        maxLength={25}
                    />
                    {showError && renderError('Please Fill Username')}
                </View>

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
                    {showError && renderError('Please Fill MobileNo.')}
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
                    {showError && renderError('Please Fill Password')}

                </View>
            </View>

            <Pressable style={[styles.loginPress, {
                backgroundColor: userName == '' && mobileNo == undefined && password == undefined ? 'gray' : 'blue',
            }]}
                disabled={userName == '' && mobileNo == undefined ? true : false}
                onPress={() => {
                    if (userName == undefined || mobileNo == undefined || password == undefined) {
                        setShowError(true)
                    } else {
                        setShowError(false)
                        let data = {
                            userName: userName,
                            mobileNo: mobileNo
                        }
                        navigation.navigate('homeScreen', {
                            data
                        })
                    }
                }}>
                <Text style={styles.loginButtonTxt}>LOGIN</Text>
            </Pressable>
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
    )
}
export default vendorLogin;
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
    }
})