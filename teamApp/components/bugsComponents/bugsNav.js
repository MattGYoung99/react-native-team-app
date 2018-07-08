import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class BugsNav extends React.Component {
        render() {
            return (
                <View style={styles.bugsDiv}>
                    <Icon name='ios-bulb' color="#fff" size={90}/>
                    <Text>Suggestions</Text>
                </View>
            )
        }   
}

const styles = StyleSheet.create({
    bugsDiv: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#000000',
        backgroundColor: '#43AD29',
        justifyContent: 'center',
        alignItems: 'center'
      }
})
