import React from "react";
import WebView from "react-native-webview";
import {
    Image, StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";

interface Props {
    navigation: any,
    route: any
}

interface State {
    loading: boolean,
}

export class WanWebViewPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    setLoadingState(loading: boolean) {
        this.setState({
            loading: loading
        })
    }

    render() {
        const {navigation, route} = this.props
        const {loading} = this.state
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content"/>
                {/*{loading && <ActivityIndicator style={styles.progressBar}/>}*/}
                <WebView
                    style={{flex: 1}}
                    source={{uri: route?.params.link}}
                    onLoadStart={() => this.setLoadingState(true)}
                    onLoadEnd={() => this.setLoadingState(false)}
                />
                <TouchableOpacity
                    style={styles.back_view}
                    onPress={() => navigation.goBack()}
                >
                    <Image style={styles.back_arrow} source={require("../assets/pic/back.png")}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    progressBar: {
        width: '100%',
    },
    back_view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        backgroundColor: "#f2f2f2",
        position: "absolute",
        bottom: 60,
        left: 20,
        borderRadius: 50,
    },
    back_arrow: {
        height: 25,
        width: 25,
    }
})
