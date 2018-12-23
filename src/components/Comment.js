import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentSelectorFactory} from '../selectors'

class Comment extends Component {
    
    static PropTypes = {
        comment: PropTypes.shape({
            id: PropTypes.string.isRequired,
            //from connect
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    }

    render() {
        const {comment} = this.props
        return (
            <div>
                <p>{comment.user}</p>
                <section>{comment.text}</section>
            </div>
        )
    }
}

const mapStateToProps = ()  => {
    const commentSelector = commentSelectorFactory()

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    }
}

export default connect(mapStateToProps)(Comment)