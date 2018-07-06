import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ManagerNav extends React.Component {
    render() {
        return (
            <View style={styles.managerDiv}>
                <Text>Manager</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    managerDiv: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
      }
})