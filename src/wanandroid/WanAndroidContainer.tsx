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
import {WanMine} from "./mine/WanMine";
import {NavigationTitle} from "./common/NavigationTitle";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="BottomTabs">
            <Stack.Screen name="BottomTabs" component={MyTabs} options={{headerShown: false}}/>
            <Stack.Screen name="WanWebViewPage" component={WanWebViewPage} options={{headerShown: false}}/>
            <Stack.Screen
                name="WanTreeTab"
                component={WanTreeTab}
                options={({route}) => ({
                    title: route.name,
                    // header: () => (
                    //     <NavigationTitle title="首页"/>
                    // ), //自定义头
                    headerShown: true, //是否开启导航栏显示，true: 显示
                    headerStyle: styles.head_style, //外部容器style
                    headerTitleStyle: styles.header_title_style, //内部文案style
                    headerTitleAlign: 'center', // 设置标题居中对齐
                    headerTintColor: '#FFFFFF', //导航栏按钮的颜色
                })}
            />
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
            <Tab.Screen
                name="首页"
                component={WanHome}
                options={{
                    header: () => (
                        <NavigationTitle title="首页"/>
                    ), //自定义头
                }}
            />
            <Tab.Screen
                name="体系"
                component={WanTree}
                options={{
                    headerShown: true,
                    headerStyle: styles.head_style,
                    headerTitleStyle: styles.header_title_style,
                    headerTitleAlign: 'center', // 设置标题居中对齐
                }}
            />
            <Tab.Screen
                name="我的"
                component={WanMine}
                options={{
                    headerShown: true,
                    headerStyle: styles.head_style,
                    headerTitleStyle: styles.header_title_style,
                    headerTitleAlign: 'center', // 设置标题居中对齐
                }}
            />
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
    head_style: {
        backgroundColor: "#00BFFF",
        elevation: 0,
        shadowOpacity: 0,
    },
    header_title_style: {
        color: 'white',
    },
})
