import React from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ItemInfoArticle} from "./common/ItemInfoArticle";

interface Props {
    navigation: any,
}

interface State {
    page: number,
    data: [],
    loaded: boolean,
}

//首页 - "首页"
export class WanHome extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            page: 0,
            data: [],
            loaded: false,
        }
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData(this.state.page)
    }

    fetchData(page: number) {
        const REQUEST_URL = `https://www.wanandroid.com/article/list/${page}/json`
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
        const {navigation} = this.props
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
                    onEndReached={() => this.fetchData(this.state.page)}
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
