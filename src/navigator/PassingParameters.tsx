import React from "react";
import {Button, TextInput, View} from "react-native";

interface Props {
    navigation: any
}

interface State {
    postText: string,
}

export class PassingParameters extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            postText: '',
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput multiline
                           placeholder="What's on your mind?"
                           style={{height: 200, padding: 10, backgroundColor: 'white'}}
                           value={this.state.postText}
                           onChangeText={text => {
                               this.setState({postText: text})
                           }}/>
                <Button title="Done" onPress={() => this.props.navigation.navigate({
                    name: 'Home',
                    params: { post: this.state.postText },
                    merge: true,
                })}/>
            </View>
        );
    }
}
