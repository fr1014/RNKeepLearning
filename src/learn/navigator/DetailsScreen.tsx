import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface Props {
    navigation: any,
    route: any,
}

interface State {

}

export class DetailsScreen extends React.Component<Props, State> {
    render() {
        const {navigation, route} = this.props
        const params = route.params
        return (
            <View style={styles.container}>
                <Text>Details Screen</Text>
                <Text>{params.itemId}</Text>
                <Text>{params.otherParam}</Text>
                <Text>
                    - navigation.navigate('RouteName')如果它不在堆栈中，则将新路由推送到堆栈导航器，否则跳转到该Screen。 {'\n'}
                    - 调用navigation.push('RouteName')任意多次，它会继续推送路由。{'\n'}
                    - 标题栏会自动显示后退按钮，但可以通过调用navigation.goBack()。在 Android 上，硬件后退按钮按预期工作。{'\n'}
                    - 可以使用navigation.navigate('RouteName')返回堆栈中的现有Screen，也可以使用navigation.popToTop()返回堆栈中的第一个Screen。
                </Text>
                <TouchableOpacity style={styles.button}
                    //navigate功能是“转到此屏幕”，如果已经在该屏幕上，那么它什么都不做。
                    // onPress={() => this.props.navigation.navigate('Details')}
                                  onPress={() => navigation.push('Details')}
                >
                    <Text style={styles.button_text}>push: Go to Details again</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.button_text}>goBack: Go back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.button_text}>navigate: Go to Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.popToTop()}
                >
                    <Text style={styles.button_text}>popToTop: Go back to first screen in stack</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.setParams({
                    itemId: 666666,
                    otherParam: '我是更新后的参数'
                })}>
                    <Text style={styles.button_text}>setParams: 更新传递参数</Text>
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
