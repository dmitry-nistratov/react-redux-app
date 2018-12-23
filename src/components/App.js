import React, {Component} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker from 'react-day-picker'
import Counter from './Counter'
import ChangeColor from './ChangeColor/index'
//import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import {articles} from '../fixtures'

export default class App extends Component {

    state = {
        selection: null,
        selectedDay: undefined
    }

    render() {
        //const articles = this.props.articleState
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <UserForm />
                <DayPicker onDayClick={this.handleDayClick} />
                {this.state.selectedDay ? (
                    <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
                    ) : (
                    <p>Please select a day.</p>
                )}
                <Select options={options} value={this.state.selection} onChange={this.changeSelection} multi />
                
                <ArticleList />
                <Counter />
                <ChangeColor />
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})

    handleDayClick = day => this.setState({
        selectedDay: day
    })

}