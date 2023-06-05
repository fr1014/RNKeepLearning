import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

interface Props {

}

interface State {

}

export class LogoTitle extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <Image style={{width: 20, height: 20}}
                       source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                <Text>KeepLearning</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    }
})
