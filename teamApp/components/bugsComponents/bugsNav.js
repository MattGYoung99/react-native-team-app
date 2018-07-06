import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BugsNav extends React.Component {
        render() {
            return (
                <View style={styles.bugsDiv}>
                    <Text>Suggestions</Text>
                </View>
            )
        }   
}

const styles = StyleSheet.create({
    bugsDiv: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center'
      }
})
