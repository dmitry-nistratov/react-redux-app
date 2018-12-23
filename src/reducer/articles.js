import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS} from '../constants'
import {arrToMap} from '../helpers'
import {Map, Record, OrderedMap} from 'immutable'

const ArticleRecord = Record({
    text: null,
    title: '',
    id: null,
    comments: []
})

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({}) //articles
})

const defaultState = new ReducerState()

export default (articleState = defaultState, action) => {
    const {type, payload, response, randomId} = action
    switch(type){
        case DELETE_ARTICLE: 
        return articleState.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articleState.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId))
        // const article = articleState[payload.articleId] 
        // return {
        //     ...articleState,
        //     [payload.articleId]: { // create new object with new copy of article
        //         ...article,
        //         comments: (article.comments || []).concat(randomId) // new copy of comment with new id
        //     }
        // }

        case LOAD_ALL_ARTICLES + START:
        articleState.set('loading', true)
        console.log('start', articleState.loading)
        return articleState.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
        console.log('before', articleState.entities)
        articleState.set('entities', arrToMap(response, ArticleRecord))
        console.log('after', articleState.entities)
        return articleState
            .set('entities', arrToMap(response, ArticleRecord))
            .set('loading', false)
            .set('loaded', true)
        //return arrToMap(response, ArticleRecord)
    }

    return articleState
}
