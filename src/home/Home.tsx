import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface Props {
    navigation: any,
    route: any,
}

interface State {

}

export class Home extends React.Component<Props, State> {

    render() {
        const navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                                  onPress={() => navigation.navigate('Home_Navigation')}>
                    <Text style={styles.button_text}>Navigation Learn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={() => navigation.navigate('Home_Doc')}>
                    <Text style={styles.button_text}>Doc About</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: "#4497f5",
        borderRadius: 5,
        marginVertical: 5,
    },
    button_text: {
        color: "#FFFFFF"
    },
})
