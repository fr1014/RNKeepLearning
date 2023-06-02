import * as React from "react";
import {Button, Text, View} from "react-native";
import {PassingParameters} from "./passing_parameters";

interface Props {
    navigation: any
}

interface State {

}

export class HomeScreen extends React.Component<Props, State> {
    render() {
        React.useEffect(() => {

        })
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button title='Go to Details'
                        onPress={() => this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        })}/>
                <Button title='Go To PassingParameters'
                        onPress={()=> this.props.navigation.navigate('PassingParameters')}/>
            </View>
        );
    }
}
