import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface Props {
    navigation: any,
    route: any,
}

interface State {

}

export class DocHomeScreen extends React.Component<Props, State> {

    render() {
        const navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                                  onPress={() => navigation.navigate('ReactDoc')}>
                    <Text style={styles.button_text}>React文档</Text>
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
