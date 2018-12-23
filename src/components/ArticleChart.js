import React, {Component} from 'react'
import ArticleList from './ArticleList'

export default class ArticleChart extends Component {

    componentDidMount() {
        //d3 works with this.refs.chart
    }

    render() {
        return <div ref='chart' />
    }

    componentWillUnmount() {
        //do some cleanup
    }
}