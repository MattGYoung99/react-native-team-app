import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ScheduleNav extends React.Component {
    render() {
        return (
            <View style={styles.scheduleDiv}>
                <Text>Schedule Div</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scheduleDiv: {
        width: '100%',
        flex: 1,
        backgroundColor: 'lightblue',
      }
})