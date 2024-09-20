import { StyleSheet, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
// import { GiftedChat } from 'react-native-gifted-chat'

function chat() {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    return (
        <View style={styles.mainContainer}>
            {/* <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            /> */}
        </View>
    )
};
export default chat;
const styles = StyleSheet.create * {
    mainContainer: {
        flex: 1
    }
}