import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {WanTreeDetail} from "./WanTreeDetail";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

type TabInfo = {
  name: string,
  screen: React.ComponentType<any>
}

const Tab = createMaterialTopTabNavigator();

interface State {
  tabs: TabInfo[];
}

export class WanTreeTab extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      tabs: [
        { name: 'Tab_1', screen: () => <View><Text>Tab 1 content</Text></View> },
        { name: 'Tab_2', screen: () => <View><Text>Tab 2 content</Text></View> },
        { name: 'Tab_3', screen: () => <View><Text>Tab 3 content</Text></View> },
      ],
    };
  }

  generateRoutes() {
    return this.state.tabs.map((tab, index) => (
        <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.screen}
        />
    ));
  }

  render() {
    return (
        <Tab.Navigator>
          {this.generateRoutes()}
        </Tab.Navigator>
    );
  }
}
