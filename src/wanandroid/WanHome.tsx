import React from "react";
import {DataInfo, FlatListArticle} from "./common/FlatListArticle";
import {LoadingView} from "./common/LoadingView";

interface Props {
    navigation: any,
}

interface State {
    page: number,
    dataInfo: DataInfo,
    loaded: boolean,
}

//首页 - "首页"
export class WanHome extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            page: 0,
            dataInfo: {
                data: [],
                over: false,
            },
            loaded: false,
        }
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        const {page, dataInfo} = this.state
        const REQUEST_URL = `https://www.wanandroid.com/article/list/${page}/json`
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseJson => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    page: page + 1,
                    dataInfo: {
                        data: dataInfo.data.concat(responseJson.data.datas),
                        over: responseJson.data.over,
                    },
                    loaded: true,
                })
            })
    }

    render() {
        if (!this.state.loaded) {
            return (<LoadingView/>);
        }
        const {navigation} = this.props
        const {dataInfo} = this.state
        return (
            <FlatListArticle
                navigation={navigation}
                fetchDate={this.fetchData}
                dataInfo={dataInfo}
            />
        );
    }
}
