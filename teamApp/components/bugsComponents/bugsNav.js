import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class BugsNav extends React.Component {
        render() {
            return (
                <View style={styles.bugsDiv}>
                    <Icon name='ios-bulb' size={90}/>
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
