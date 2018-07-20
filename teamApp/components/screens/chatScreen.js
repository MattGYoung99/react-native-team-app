import React from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';


export default class ChatScreen extends React.Component {
    render() {
        return (
                <ChatScreenTabNavigator/>
        )
    }
}

class PublicScreen extends React.Component {
    render() { 
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Button title='Go to Private Messages' onPress={()=>navigate('Private')}/>
            </View>
        );
    }
}

class PrivateScreen extends React.Component {
    render() { 
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Button title='Go to Public Chat' onPress={()=>navigate('Public')}/>
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
                tabBarIcon: ({tintColor}) => (
                    <Icon name='ios-person' color={tintColor} size={24}/>
                )
             }
        },
        Private: {
             screen: PrivateScreen,
             navigationOptions: {
                tabBarLabel: 'Private',
                tabBarIcon: ({tintColor}) => (
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