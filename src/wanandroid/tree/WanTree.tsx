import React from "react";
import {SafeAreaView, SectionList, StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface Props {
    navigation: any,
}

//首页 - "体系"
export class WanTree extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.state = {
            data: [],
        }
        this.fetchData = this.fetchData.bind(this)
        this.renderItem = this.renderItem.bind(this)
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        const REQUEST_URL = "https://www.wanandroid.com/tree/json"
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseJson => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    data: responseJson.data
                })
            })
    }

    renderItem(item, section) {
        return (
            <TouchableOpacity
                style={styles.container_item}
                onPress={() => {
                    this.props.navigation.navigate('WanTreeTab', {
                        data: section.data
                    })
                }}
            >
                <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    renderItemHeader({section}) {
        return (
            <View style={styles.container_header}>
                <Text style={styles.header}>{section.title}</Text>
            </View>
        );
    }

    render() {
        const {data} = this.state
        const sections = data.map((section) => ({
            title: section.name,
            data: section.children, // 使用正确的子项字段名
        }));
        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={sections}
                    keyExtractor={(item) => item.id}
                    renderSectionHeader={this.renderItemHeader}
                    renderItem={({item, section}) => this.renderItem(item, section)}
                    stickySectionHeadersEnabled={true}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    container_header: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 15,
        paddingVertical: 6,
    },
    container_item: {
        flex: 1,
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        paddingHorizontal: 15,
        paddingTop: 6,
    },
    header: {
        fontSize: 18,
        color: "#222222",
        fontWeight: "600",
    },
    item: {
        fontSize: 14,
        color: "#222222",
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 12,

    },
})
