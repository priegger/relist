import { combineReducers } from 'redux'

import { List } from './model/List'
import { initialState } from './model/State'
import { ListAction } from './model/Actions'

const selectedList = (current = initialState.selectedList, action: ListAction): string => {
    if (action.type === 'SELECT_LIST') {
        return action.name
    }
    return current
}

const lists = (current = initialState.lists, {  }: ListAction): List[] => {
    return current
}
export const reducer = combineReducers({ lists, selectedList })
