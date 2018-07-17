import React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';


export default class ChatScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ChatScreenTabNavigator/>
            </SafeAreaView>
        )
    }
}

class PublicScreen extends React.Component {
    render() { 
        return(
            <View>
                <Button title='Go to Private Messages' onPress={()=>this.props.navigation.navigate('Public')}/>
            </View>
        );
    }
}

class PrivateScreen extends React.Component {
    render() { 
        return(
            <View>
                <Button title='Go to Public Chat' onPress={()=>this.props.navigation.navigate('Private')}/>
            </View>
        );
    }
}


const ChatScreenTabNavigator = createMaterialTopTabNavigator(
    {
        Public: {
             screen: PublicScreen,
             navigationOptions: {
                tabBarLabel: 'Public',
                tabBarIcon:({tintColor})=>(
                    <Icon name='ios-person' color={tintColor} size={24}/>
                )
             }
        },
        Private: {
             screen: PrivateScreen,
             navigationOptions: {
                tabBarLabel: 'Private',
                tabBarIcon:({tintColor})=>(
                    <Icon name='ios-people' color={tintColor} size={24}/>
                )
             }
        },
    },
    {
        initialRouteName: 'Public',
        order: ['Public', 'Private'],
        activeTintColor: 'orange',
    }
)