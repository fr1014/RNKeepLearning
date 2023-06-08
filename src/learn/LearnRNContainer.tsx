// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from "./navigator/HomeScreen";
import {DetailsScreen} from "./navigator/DetailsScreen";
import {PassingParameters} from "./navigator/PassingParameters";
import {CustomTitle} from "./navigator/CustomTitle";
import {LogoTitle} from "./navigator/LogoTitle";
import {DocHomeScreen} from "./doc";
import {Home} from "./home/Home";
import {ReactDoc} from "./doc/ReactDoc";

const Stack = createNativeStackNavigator();

interface Props {

}

interface State {

}

export class LearnRNContainer extends React.Component<Props, State> {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home}/>

                    {/*首页入口*/}
                    <Stack.Screen name="Home_Navigation" component={HomeScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Home_Doc" component={DocHomeScreen}/>
                    {/*首页入口*/}

                    {/*Navigation*/}
                    <Stack.Screen name="Details" component={DetailsScreen}
                                  initialParams={{itemId: 666, otherParam: '我是默认参数'}}/>
                    <Stack.Screen name="PassingParameters" component={PassingParameters}/>
                    <Stack.Screen name="CustomTitle"
                                  component={CustomTitle}
                                  options={{headerTitle: (props) => <LogoTitle/>}}/>
                    {/*Navigation*/}

                    {/*文档*/}
                    <Stack.Screen name="ReactDoc" component={ReactDoc}/>
                    {/*文档*/}

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
