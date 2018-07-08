import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ManagerNav extends React.Component {
    render() {
        return (
            <View style={styles.managerDiv}>
                <Icon name='user-secret' color="#fff" size={90}/>
                <Text>Manager</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    managerDiv: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000000',
        backgroundColor: '#43AD29',
        justifyContent: 'center',
        alignItems: 'center'
      }
})