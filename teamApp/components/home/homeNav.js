import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class ChatNav extends React.Component {
    render() {
        return (
            <View style={styles.quarterDiv}>
                <Icon name='ios-chatboxes' color="#fff" size={90}/>
                <Text>Chat</Text>
            </View>
        )
    }
}

export class ScheduleNav extends React.Component {
    render() {
        return (
            <View style={styles.quarterDiv}>
                <Icon name='ios-calendar' color="#fff" size={90}/>
                <Text>Schedule</Text>
            </View>
        )
    }
}

export class BugsNav extends React.Component {
    render() {
        return (
            <View style={styles.quarterDiv}>
                <Icon name='ios-bulb' color="#fff" size={90}/>
                <Text>Suggestions</Text>
            </View>
        )
    }   
}

export class ManagerNav extends React.Component {
    render() {
        return (
            <View style={styles.quarterDiv}>
                <Icon name='ios-construct' color="#fff" size={90}/>
                <Text>Manager</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    quarterDiv: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000000',
        backgroundColor: '#43AD29',
        justifyContent: 'center',
        alignItems: 'center'
    },
})


