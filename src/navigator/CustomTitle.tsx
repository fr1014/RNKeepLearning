import React from "react";
import {View, Text, StyleSheet} from "react-native";

interface Props {

}

interface State {

}

export class CustomTitle extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.container_text}>自定义标题栏</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container_text: {
        fontSize: 20,
        color: '#222222',
    }
})


