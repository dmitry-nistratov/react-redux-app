import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import { runInThisContext } from 'vm';

class CommentList extends Component {

    static defaultProps = {
        comments: []
    }
    static PropTypes = {
        isOpen: PropTypes.string,
        toggleOpen: PropTypes.func.isRequired
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody = () => {
        const {article: {comments = [], id}, isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>no comments</p>
        return(
            <div>
                <ul>
                    {comments.map(id => <li key = {id}><Comment id = {id}/></li>)}
                </ul>
                <CommentForm articleId = {id}/>
            </div>
        )
    }

}

export default toggleOpen(CommentList)