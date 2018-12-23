import React, {Component} from 'react'
import {increment} from '../AC'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Counter extends Component {
    static PropTypes = {
        counter: PropTypes.number
    }
    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button 
                    onClick={this.handleIncrement}
                >
                    Increment me
                </button>
            </div>
        )
    }

    handleIncrement = () => {
        const {increment} = this.props
        increment()
    }
}

/*function mapStateToProps(state){
    return {
        counter: state.count
    }
}

const mapToDispatch = {
    dispatchIncrement: increment
}

const decorator = connect(mapStateToProps, mapToDispatch)*/

export default connect((state) => ({
    counter: state.count
}), {increment})(Counter)