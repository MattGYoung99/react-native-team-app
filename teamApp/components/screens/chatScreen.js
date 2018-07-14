import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createStackNavigator,
} from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';

class PublicScreen extends React.Component {
    render() { 
        return(
            <View>
                <Text>This is the Public Screen</Text>
            </View>
        );
    }
}

class PrivateScreen extends React.Component {
    render() { 
        return(
            <View>
                <Text>This is the Private Screen</Text>
            </View>
        );
    }
}
class GeneralScreen extends React.Component {
    render() { 
        return(
            <View>
                <Text>This is the General Screen</Text>
            </View>
        );
    }
}

const ChatScreenTabNavigator = createMaterialTopTabNavigator(
    {
        Public: PublicScreen,
        Private: PrivateScreen,
        General: GeneralScreen
    },
)