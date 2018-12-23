import React, {Component} from 'react'
//import style from './style.css'
import './style.css'
import {connect} from 'react-redux'
import {changeColor} from '../../AC'

class ChangeColor extends Component {
    render() {
        const pStyle = {
            border: `1px solid ${this.props.color}`
        }
        return(
            <div>
                <p 
                    style={pStyle}
                    onClick={this.changeColorClick}
                >
                    123
                </p>
            </div>
        )
    }
    changeColorClick = () => {
        const {changeColor} = this.props
        changeColor()
    }
}

export default connect(({color}) => ({color}), {changeColor})(ChangeColor)
