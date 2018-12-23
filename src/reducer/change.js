import {CHANGE_COLOR} from '../constants'

export default (color = 'grey', action) => {
    const {type} = action

    switch(type){
        case CHANGE_COLOR: return color = 'blue'
    }

    return color
}