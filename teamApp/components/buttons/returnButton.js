import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ReturnButton extends React.Component {
    render() {
        return (
            <View style={styles.returnButton}>
                <Button title=''><Icon name='ios-arrow-round-back' size={30}></Icon></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    returnButton: {
        width: '24px',
        height: '12px',
    }
})