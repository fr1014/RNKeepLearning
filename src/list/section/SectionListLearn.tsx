import React from 'react';
import {
    SafeAreaView,
    SectionList,
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionList: {
      paddingTop: 20,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    title: {
        fontSize: 24
    },
});

const DATA = [
    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
]

const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

interface Props {

}

interface State {

}

export class SectionListLearn extends React.Component<Props, State> {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <SectionList style={styles.sectionList}
                    sections={DATA}
                    renderItem={({item}) => <Item title={item}/>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => item + index}
                />
            </SafeAreaView>
        );
    }
}
