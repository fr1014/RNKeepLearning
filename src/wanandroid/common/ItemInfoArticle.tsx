import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface Props {
    navigation: any,
    index: number,
    shareUser: string,
    niceShareDate: string,
    superChapterName: string,
    chapterName: string,
    title: string,
    link: string,
}

interface State {

}

export class ItemInfoArticle extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
    }

    render() {
        const {navigation, index, shareUser, niceShareDate, superChapterName, chapterName, title, link} = this.props
        return (
            <TouchableOpacity
                style={index % 2 == 0 ? styles.container_item_1 : styles.container_item_2}
                onPress={() => navigation.navigate('WanWebViewPage', {
                    link: link,
                })}>
                <View style={styles.item_top_bottom}>
                    <Text>{shareUser}</Text>
                    <Text>{niceShareDate}</Text>
                </View>
                <Text style={styles.item_title}>{title}</Text>
                <View style={styles.item_top_bottom}>
                    <Text>{superChapterName}-{chapterName}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container_item_1: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#ffffff",
    },
    container_item_2: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "#f2f2f2",
    },
    item_top_bottom: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    item_title: {
        color: "#222222",
        fontSize: 14,
        paddingVertical: 4,
    },
})
