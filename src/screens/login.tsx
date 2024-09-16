import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";


function login({ route, navigation }: any) {
    const [mobileNo, setMobileNo] = useState()
    return (
        <View>
            <TextInput
                value={mobileNo}
                style={styles.inputStyle}
                onChangeText={(value: any) => {
                    setMobileNo(value)
                }} />
            <Button onPress={() => {
                navigation.navigate('homeScreen')
            }}
                title={'Home'}
            />
        </View>
    )
};

export default login;
const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        borderWidth: 1,
        borderColor: 'pink',
        marginVertical: 30,
        width: '60%',
        alignSelf: 'center'
    }
})