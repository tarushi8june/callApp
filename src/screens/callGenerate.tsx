import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native"

const callGenerate = ({route,navigation}:any) => {
    const{ userName,
        mobileNo,
        password,
        fromCustomer}=route.params;
    const [modalVisible, setModalVisible] = useState(true);
    const [number, setNumber] = useState();

    return <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={{
            height: 300,
        }}
    >
        <View style={{
            alignSelf: 'center',
            justifyContent:'center'
        }}>
            <View style={{
                marginVertical:50
            }}>

            <Text style={{
                color:'black',
                fontSize:12,
                marginLeft:23
            }}>{fromCustomer?'Vendor Contact':'Customer Contact'}</Text>

            <TextInput
                value={number}
                onChangeText={(value: any) => {
                    setNumber(value)
                }}
                placeholder="Type Your Calling Number"
                maxLength={10}
                style={{
                    height: 45,
                    borderWidth: 1,
                    borderColor: 'black',
                    width: '80%',
                    alignSelf: 'center',
                    color: 'black',
                    marginTop:10
                }}
            />


            <Pressable style={{
                height:40,
                width:200,
                backgroundColor:'blue',
                marginTop:40,
                borderRadius:40,
                alignSelf:'center',
                justifyContent:'center'
            }} 
            onPress={()=>{
                navigation.navigate('callScreen',{
                    number,
                    mobileNo
                })
            }}>
                <Text style={{
                    color:'white',
                    textAlign:'center'
                }}>Call Generate</Text>
            </Pressable>
            </View>
        </View>

    </Modal>
};

export default callGenerate;