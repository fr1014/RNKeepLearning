import React from "react";
import WebView from "react-native-webview";
import {View} from "react-native";

interface Props {

}

interface State {

}

export class ReactDoc extends React.Component<Props, State>{
    render() {
        return (
            <View style={{flex: 1}}>
                <WebView source={{ uri: 'https://zh-hans.react.dev/learn' }} style={{ flex: 1 }} />
            </View>
        );
    }
}
