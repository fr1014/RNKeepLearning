import React from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {ItemInfoArticle} from "./ItemInfoArticle";

export type DataInfo = {
    data: [],
    over: boolean,
}

interface Props {
    navigation: any,
    fetchDate: () => void,
    dataInfo: DataInfo,
}

interface State {

}

export class FlatListArticle extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    renderFooter(over: boolean) {
        if (over) {
            return (
                <View style={styles.footerContainer}>
                    <Text style={styles.footer_text}>～人家也是有底线的～</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.footerContainer}>
                    <Text style={styles.footer_text}>加载中...</Text>
                </View>
            )
        }
    }

    render() {
        const {navigation, dataInfo} = this.props
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#00BFFF" barStyle="dark-content"/>
                <FlatList
                    data={dataInfo.data}
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
                    ListFooterComponent={this.renderFooter(dataInfo.over)}
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
        height: 60
    },
    footer_text: {}
})
