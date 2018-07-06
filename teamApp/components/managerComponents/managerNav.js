import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ManagerNav extends React.Component {
    render() {
        return (
            <View style={styles.managerDiv}>
                <Icon name='user-secret' size={90}/>
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