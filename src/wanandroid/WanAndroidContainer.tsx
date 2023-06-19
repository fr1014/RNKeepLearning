import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WanHome} from "./WanHome";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {WanWebViewPage} from "./WanWebViewPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {WanTree} from "./tree/WanTree";
import {WanTreeTab} from "./tree/WanTreeTab";
import {WanTreeDetail} from "./tree/WanTreeDetail";
import {Image, StyleSheet} from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="BottomTabs">
            <Stack.Screen name="BottomTabs" component={MyTabs} options={{headerShown: false}}/>
            <Stack.Screen name="WanWebViewPage" component={WanWebViewPage} options={{headerShown: false}}/>
            <Stack.Screen name="WanTreeTab" component={WanTreeTab} options={{headerShown: false}}/>
            <Stack.Screen name="WanTreeDetail" component={WanTreeDetail}/>
        </Stack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let icon
                if (route.name == "首页") {
                    icon = focused
                        ? <Image source={require('../assets/pic/selected_plane.png')} style={styles.bottom_tab_icon}/>
                        :
                        <Image source={require('../assets/pic/unselect_plane.png.png')} style={styles.bottom_tab_icon}/>
                } else if (route.name == "体系") {
                    icon = focused
                        ? <Image source={require('../assets/pic/selected_small_bike.png')}
                                 style={styles.bottom_tab_icon}/>
                        : <Image source={require('../assets/pic/unselect_small_bike.png')}
                                 style={styles.bottom_tab_icon}/>
                } else if (route.name == "我的") {
                    icon = focused
                        ? <Image source={require('../assets/pic/selected_ship.png')} style={styles.bottom_tab_icon}/>
                        : <Image source={require('../assets/pic/unselect_ship.png')} style={styles.bottom_tab_icon}/>
                }
                return icon
            }
        })}>
            <Tab.Screen name="首页" component={WanHome} options={{headerShown: false}}/>
            <Tab.Screen name="体系" component={WanTree} options={{headerShown: false}}/>
            <Tab.Screen name="我的" component={WanHome} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}

export class WanAndroidContainer extends React.Component<any, any> {
    render() {
        return (
            <NavigationContainer>
                <MyStack/>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    bottom_tab_icon: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    },
})
