import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ScheduleNav extends React.Component {
    render() {
        return (
            <View style={styles.scheduleDiv}>
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