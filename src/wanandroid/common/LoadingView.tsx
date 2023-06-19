import React from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";

export class LoadingView extends React.Component<any, any> {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Loading data...</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})
