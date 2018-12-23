import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import { CSSTransitionGroup } from 'react-transition-group'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC'
import './style.css'
//import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {

    static PropTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    state = {
        deleteArticle: true
    }

    /*shouldComponentUpdate(nextProps, nextState){
        return nextProps.isOpen !== this.props.isOpen
    }*/
        
    render() {
        const {article, isOpen, toggleOpen} = this.props
        const deleteArticle = this.state.deleteArticle
        return (
            <div>{deleteArticle && <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick={this.handleDelete}>Delete</button>
                <CSSTransitionGroup                 
                transitionName="article"
                transitionAppear
                transitionEnterTimeout={300}
                transitionLeaveTimeout={500}
                transitionAppearTimeout={300}
                component='div'
                >
                    {this.getBody()}
                </CSSTransitionGroup>   
            </div>}
            </div>
        )
    }

    getBody = () => {
        const {article, isOpen} = this.props
        if(!isOpen) return null
        return (
            <section>
                {article.text}
                <CommentList article = {article} ref = {this.setCommentsList} />
            </section>
        )  
    }

    setCommentsList = ref => {
        console.log('---', findDOMNode(ref))
    }

    handleDelete = () => { // TO DO
        const {article} = this.props
        const {deleteArticle} = this.props
        deleteArticle(article.id)
    }
}

export default connect(null, {deleteArticle})(Article)

