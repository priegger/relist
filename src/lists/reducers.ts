import { combineReducers, bindActionCreators } from 'redux'

import { List } from './model/List'
import { initialState } from './model/State'
import { ListAction } from './model/Actions'

const selectedList = (current = initialState.selectedList, action: ListAction): string => {
    if (action.type === 'SELECT_LIST') {
        return action.name
    }
    return current
}

const lists = (current = initialState.lists, action: ListAction): List[] => {
    if (action.type === 'DELETE_LIST') {
        return current.filter(list => list.name !== action.name)
    }
    return current
}

export const reducer = combineReducers({ lists, selectedList })
