import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const PublicChat = () => {
    return (
        <View style={styles.publicChat}>
            <button><Icon name='ios-chatboxes' color='#000' size={30}></Icon></button>
        </View>
    )
}

const styles = StyleSheet.create({
    publicChat: {
        flex: 1,
        justifyContent: 'flex-start',
    }
})