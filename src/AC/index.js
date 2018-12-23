import {DELETE_ARTICLE, INCREMENT, CHANGE_COLOR, ADD_COMMENT, LOAD_ALL_ARTICLES, 
    LOAD_ARTICLE, START, SUCCESS, FAIL} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function changeColor() {
    return {
        type: CHANGE_COLOR
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id}
        })
        
        setTimeout(() => {
            fetch(`/api/article/${id}`)
                .then(res => res.json())
                .then(response => next({...rest, type: type + SUCCESS}))  
        })
    }
}

// export function loadArticle(id) {
//     return {
//         type: LOAD_ARTICLE,
//         callAPI: `/api/article/${id}`
//     }
// }