import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

interface Props {

}

interface State {

}

export class HelloWorld extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hello}>Hello, World</Text>
            </View>
        );
    }
}
