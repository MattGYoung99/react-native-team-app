import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ScheduleNav extends React.Component {
    render() {
        return (
            <View style={styles.scheduleDiv}>
                <Icon name='ios-calendar' size={90}/>
                <Text>Schedule</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scheduleDiv: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
      }
})