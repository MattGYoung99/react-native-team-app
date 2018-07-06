import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ManagerNav extends React.Component {
    render() {
        return (
            <View style={styles.managerDiv}>
                <Text>Manager Div</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    managerDiv: {
        width: '100%',
        flex: 1,
        backgroundColor: 'green',
      }
})