import React from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {ItemInfoArticle} from "./ItemInfoArticle";

interface Props {
    navigation: any,
    fetchDate: () => void,
    data: [],
}

interface State {

}

export class FlatListArticle extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    renderFooter() {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footer_text}>加载中...</Text>
            </View>
        )
    }

    render() {
        const {navigation, data} = this.props
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#00BFFF" barStyle="dark-content"/>
                <FlatList
                    data={data}
                    renderItem={({item, index}) =>
                        <ItemInfoArticle
                            navigation={navigation}
                            index={index}
                            shareUser={item.shareUser}
                            niceShareDate={item.niceShareDate}
                            superChapterName={item.superChapterName}
                            chapterName={item.chapterName}
                            title={item.title}
                            link={item.link}
                        />
                    }
                    style={styles.list}
                    keyExtractor={item => item.id}
                    onEndReached={() => this.props.fetchDate()}
                    ListFooterComponent={this.renderFooter()}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        backgroundColor: "#F5FCFF"
    },
    footerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
    },
    footer_text: {}
})
