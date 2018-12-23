import {createSelector} from 'reselect'

const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

const articlesGetter = state => state.articles.entities

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id]
})