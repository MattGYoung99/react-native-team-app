import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BugsNav extends React.Component {
        render() {
            return (
                <View style={styles.bugsDiv}>
                    <Text>Bugs Div</Text>
                </View>
            )
        }   
}

const styles = StyleSheet.create({
    bugsDiv: {
        width: '100%',
        flex: 1,
        backgroundColor: 'orange',
      }
})
