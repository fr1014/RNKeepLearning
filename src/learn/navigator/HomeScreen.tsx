import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {PassingParameters} from "./PassingParameters";

interface Props {
    navigation: any,
    route: any,
}

interface State {
    title: string
}

export class HomeScreen extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            title: 'Home Screen',
        }
    }

    componentDidUpdate(prevProps) {
        const currentParams = this.props.route.params
        const preParams = prevProps.route.params
        if (currentParams !== preParams) {
            this.setState({title: 'Home Screen: ' + currentParams?.post})
        }
    }

    render() {
        // const navigation = this.props.navigation可以简写为const {navigation} = this.props
        // const navigation = this.props.navigation
        const {navigation} = this.props
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>{this.state.title}</Text>
                <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: '我是传递过来的数据',
                        })}>
                    <Text style={styles.button_text}>Go to Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                                  onPress={()=> navigation.navigate('PassingParameters')}>
                    <Text style={styles.button_text}>Go To PassingParameters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CustomTitle')}>
                    <Text style={styles.button_text}>Custom Title</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
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
