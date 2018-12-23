import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import toggleOpenItem from '../decorators/toggleOpenItem'
import {connect} from 'react-redux'
import {mapToArr} from '../helpers'
import {loadAllArticles} from '../AC'
import Loader from './Loader'

class ArticleList extends Component {
    
    static defaultProps = {
        comments: []
    }

    static PropTypes = {
        //from connect
        //articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentDidMount(){
        const {loading, loaded, loadAllArticles} = this.props
        if (!loading || !loaded) loadAllArticles()
    }

    render() {
        const {articles, openItemId, toggleOpenItem, loading} = this.props
        if (loading) return <Loader/>
        const articleElements = articles.map(article => <li key = {article.id}>
            <Article
                id = {article.id}
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

}

// export default connect(state => ({
//     articles: state.articles
// }))(toggleOpenItem(ArticleList))

export default connect(state => ({
    articles: mapToArr(state.articles.entities),
    loading: state.articles.loading,
    loaded: state.articles.loaded
}), {loadAllArticles})(toggleOpenItem(ArticleList))
