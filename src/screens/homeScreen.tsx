import { Pressable, StyleSheet, Text, View } from "react-native";

function homeScreen({ route, navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.homePageTxt}>HOME PAGE</Text>

            <Pressable style={styles.callPress}>
                <Text style={styles.callTxt}>Chat</Text>
            </Pressable>
            <Pressable style={styles.callPress}>
                <Text style={styles.callTxt}>Call</Text>
            </Pressable>
            <Pressable style={styles.logoutPress}
                onPress={() => {
                    navigation.navigate('login', {
                        fromLogin: true
                    })
                }}>
                <Text style={styles.callTxt}>LogOut</Text>
            </Pressable>
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