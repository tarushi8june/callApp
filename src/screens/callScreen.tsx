import { ONE_ON_ONE_VIDEO_CALL_CONFIG, ZegoUIKitPrebuiltCall } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import { StyleSheet, View } from "react-native";
import { yourAppID, yourAppSign } from "../component/callingId";

function callScreen({ route, navigation }: any) {
    const { number,
        userName } = route.params;
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={yourAppID}
                appSign={yourAppSign}
                userID={userName}
                userName={userName}
                callID={number} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onCallEnd: (callID: any, reason: any, duration: any) => {
                        navigation.navigate('homeScreen', {
                            userName: '',
                            mobileNo: '',
                            password: '',
                            fromCustomer: true
                        })
                    },

                }}
            />
        </View>
    )
};

export default callScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
});