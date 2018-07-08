import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ChatMain extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    navbar: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#000'
    }
})

