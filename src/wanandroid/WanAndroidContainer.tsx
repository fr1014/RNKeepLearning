import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {WanHome} from "./WanHome";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {WanWebViewPage} from "./WanWebViewPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
       <Stack.Navigator initialRouteName="BottomTabs">
           <Stack.Screen name="BottomTabs" component={MyTabs} options={{headerShown: false}}/>
           <Stack.Screen name="WanWebViewPage" component={WanWebViewPage} options={{headerShown: false}}/>
       </Stack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="首页" component={WanHome} options={{headerShown: false}}/>
            <Tab.Screen name="Settings" component={WanHome} />
        </Tab.Navigator>
    );
}

export class WanAndroidContainer extends React.Component<any, any>{
    render() {
        return (
            <NavigationContainer>
                <MyStack/>
            </NavigationContainer>
        );
    }
}
