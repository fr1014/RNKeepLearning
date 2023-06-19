import React from "react";
import {FlatListArticle} from "../common/FlatListArticle";
import {LoadingView} from "../common/LoadingView";

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
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        const {page, data} = this.state
        // https://www.wanandroid.com/article/list/0/json?cid=60
        const REQUEST_URL = `https://www.wanandroid.com/article/list/${page}/json?cid=${this.props.id}`
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseJson => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    page: page + 1,
                    data: data.concat(responseJson.data.datas),
                    loaded: true,
                })
            })
    }

    render() {
        if (!this.state.loaded) {
            return (<LoadingView/>);
        }
        const {navigation} = this.props
        return (
            <FlatListArticle
                navigation={navigation}
                fetchDate={this.fetchData}
                data={this.state.data}
            />
        );
    }
}
