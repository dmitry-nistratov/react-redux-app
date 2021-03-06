import React, {Component} from 'react'
import './style.css'
import {connect} from 'react-redux'
import {addComment} from '../../AC'

class CommentForm extends Component {

    state = {
        user: '',
        text: ''
    }   

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                User: <input 
                    value={this.state.user} 
                    onChange={this.handleChange('user')}
                    className={this.getClassName('user')} 
                />
                <input 
                    value={this.state.text} 
                    onChange={this.handleChange('text')}
                    className={this.getClassName('text')}
                />
                <input type="submit" value="create comment" />
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < limits[type].min 
        ? 'form-input_error' : '' 
    

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
}

// export default connect(state => ({
//     articles: state.articles
// }), {addComment})(CommentForm)

export default connect(null, (dispatch, ownProps) => ({
    addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm)