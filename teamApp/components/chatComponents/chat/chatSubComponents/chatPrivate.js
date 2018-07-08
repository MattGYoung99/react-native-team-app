import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ChatPrivate = () => {
    return (
        <View>
            <button style={styles.chatPrivate}><Icon name='ios-people' color='#000' size={30}></Icon></button>
        </View>
    )
}

const styles = StyleSheet.create({
    chatPrivate: {
        flex: 1,
        justifyContent: 'flex-start',
    }
})