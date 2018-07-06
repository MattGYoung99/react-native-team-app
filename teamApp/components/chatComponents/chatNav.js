import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ChatNav extends React.Component {
        render() {
            return (
                <View style={styles.chatDiv}>
                    <Text>Chat Div</Text>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    chatDiv: {
        flex: 1,
        backgroundColor: 'blue',
    },
})