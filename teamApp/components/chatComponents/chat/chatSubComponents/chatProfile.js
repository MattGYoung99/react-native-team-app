import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ChatProfile = () => {
    return (
        <View style={styles.chatProfile}>
            <button><Icon name='ios-contact' color='#000' size={30}></Icon></button>
        </View>
    )
}

const styles = StyleSheet.create({
    chatProfile: {
        flex: 1,
        justifyContent: 'flex-start',
    }
})