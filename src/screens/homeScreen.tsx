import { StyleSheet, Text, View } from "react-native";
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { yourAppID, yourAppSign } from "../component/callingId";

function homeScreen({ route, navigation }: any) {
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={yourAppID}
                appSign={yourAppSign}
                userID={'anu'} // userID can be something like a phone number or the user id on your own user system. 
                userName={'anu'}
                callID={'anu'} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onCallEnd: (callID, reason, duration) => { navigation.navigate('HomePage') },
                }}
            />
        </View>
    )
};

export default homeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
});