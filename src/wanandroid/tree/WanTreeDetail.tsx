import React from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import {ItemInfoArticle} from "../common/ItemInfoArticle";

interface Props {
    id: number,
    navigation: any,
}

interface State {
    page: number,
    data: [],
    loaded: boolean,
}

//"体系" - 详情页 - Tab - 详细
export class WanTreeDetail extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            page: 0,
            data: [],
            loaded: false,
        }
    }

    componentDidMount() {
        this.fetchData(this.state.page, this.props.id)
    }

    fetchData(page : number, cid: number) {
        // https://www.wanandroid.com/article/list/0/json?cid=60
        const REQUEST_URL = `https://www.wanandroid.com/article/list/${page}/json?cid=${cid}`
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseJson => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    page: this.state.page + 1,
                    data: this.state.data.concat(responseJson.data.datas),
                    loaded: true,
                })
            })
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>Loading data...</Text>
            </View>
        );
    }

    renderFooter() {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footer_text}>加载中...</Text>
            </View>
        )
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }
        const {id, navigation} = this.props
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#00BFFF" barStyle="dark-content"/>
                <FlatList
                    data={this.state.data}
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
                    onEndReached={() => this.fetchData(this.state.page, id)}
                    ListFooterComponent={() => this.renderFooter()}
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
        height: 80,
    },
    footer_text: {}
})
