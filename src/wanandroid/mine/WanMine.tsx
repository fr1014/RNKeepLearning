import React from "react";
import {SafeAreaView, StyleSheet, Text} from "react-native";

export class WanMine extends React.Component<any, any> {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>我的</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
