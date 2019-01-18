import * as redux from 'redux'

import { reducer as listsReducer } from '../lists/reducers'
import { State as ListsState } from '../lists/model/State'

export interface RootState {
    lists: ListsState
}

export function createStore(): redux.Store<RootState> {
    const reducer = redux.combineReducers({ lists: listsReducer })
    return redux.createStore(reducer)
}

export function extractListState(state: RootState): ListsState {
    return state.lists
}
