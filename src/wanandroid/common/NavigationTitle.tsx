import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface Props {
    title: string,
}

export class NavigationTitle extends React.Component<Props, any>{

    render() {
        const {title} = this.props
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#00BFFF',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
