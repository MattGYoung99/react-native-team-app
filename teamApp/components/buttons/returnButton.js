import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const returnButton = () => {
    return (
        <View style={styles.returnButton}>
            <button><Icon name='ios-arrow-round-back' color='#000' size={30}></Icon></button>
        </View>
    )
}

const styles = StyleSheet.create({
    returnButton: {
        flex: 1,
        justifyContent: 'flex-start',
    }
})