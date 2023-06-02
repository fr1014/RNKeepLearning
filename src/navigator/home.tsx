import * as React from "react";
import {Button, Text, View} from "react-native";

interface Props {
    navigation: any
}

interface State {

}

export class HomeScreen extends React.Component<Props, State> {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button title='Go to Details'
                        onPress={() => this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        })}/>
            </View>
        );
    }
}
