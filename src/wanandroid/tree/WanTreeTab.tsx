import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {WanTreeDetail} from "./WanTreeDetail";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

type TabInfo = {
    name: string,
    id: number,
    screen: React.ComponentType<any>
}

const Tab = createMaterialTopTabNavigator();

interface Props {
    route: any
}

interface State {
    tabs: TabInfo[],
}

//"体系" - 详情页 - Tab管理
export class WanTreeTab extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        const {params} = this.props.route
        const tabs = params.data.map((item) => ({
            name: item.name,
            id: item.id,
        }))
        this.state = {
            tabs: tabs
        }
    }

    generateRoutes() {
        // noinspection TypeScriptValidateTypes
        return this.state.tabs.map((tab, index) => (
            <Tab.Screen
                key={index}
                name={tab.name}
                children={() => <WanTreeDetail id={tab.id}/>}
            />
        ));
    }

    render() {
        return (
            <Tab.Navigator
                backBehavior={"none"}
                screenOptions={{
                    lazy: true,
                    tabBarStyle: {backgroundColor: '#00BFFF'},
                    tabBarActiveTintColor: '#FFFFFF',
                    tabBarInactiveTintColor: '#696969',
                    tabBarItemStyle: {width: 'auto'},
                    tabBarScrollEnabled: true,
                    tabBarIndicatorStyle: {height: 0},
                    tabBarLabelStyle: {fontSize: 14, fontWeight: '600', textTransform: 'none'}, // 标签文本样式
                }}
            >
                {this.generateRoutes()}
            </Tab.Navigator>
        );
    }
}
