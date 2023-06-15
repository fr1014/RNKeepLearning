import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface Props {
    id: number,
}

interface State {

}

//"体系" - 详情页 - Tab - 详细
export class WanTreeDetail extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.id}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
