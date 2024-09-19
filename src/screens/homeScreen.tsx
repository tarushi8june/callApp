import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function homeScreen({ route, navigation }: any) {
    const { userName,
        mobileNo,
        password,
        fromCustomer } = route.params;

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
            <View style={styles.mainContainer}>
                <Text style={{
                    fontSize: 20,
                    color: 'blue',
                    textAlign: 'center'
                }}>{fromCustomer == true ? 'Login as Customer' : 'Login as Vendor'}</Text>
                {fromCustomer == true ? <Pressable style={styles.callPress}
                    onPress={() => {
                        navigation.navigate('CustomerHomeScreen')
                    }}>
                    <Text style={styles.callTxt}>Chat</Text>
                </Pressable>
                    :
                    <Pressable style={styles.callPress}
                        onPress={() => {
                            navigation.navigate('VendorHomeScreen')
                        }}>
                        <Text style={styles.callTxt}>Chat</Text>
                    </Pressable>}

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
            </View >
        </View>

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
        marginTop: 130,
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
    },
    mainContainer: {
        marginTop: 200,
    }
});