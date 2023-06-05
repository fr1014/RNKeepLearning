// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from "./navigator/home";
import {DetailsScreen} from "./navigator/details";
import {PassingParameters} from "./navigator/passing_parameters";
import {CustomTitle} from "./navigator/custom_title";
import {LogoTitle} from "./navigator/logo_title";

const Stack = createNativeStackNavigator();

interface Props {

}

interface State {

}

export class MyApp extends React.Component<Props, State> {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Details" component={DetailsScreen}
                                  initialParams={{itemId: 666, otherParam: '我是默认参数'}}/>
                    <Stack.Screen name="PassingParameters" component={PassingParameters}/>
                    <Stack.Screen name="CustomTitle"
                                  component={CustomTitle}
                                  options={{headerTitle: (props) => <LogoTitle/>}}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
