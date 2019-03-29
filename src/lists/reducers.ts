import { initialState } from './model/State'
import { ListAction } from './model/Actions'

export const reducer = ({ selectedList, lists } = initialState, action: ListAction) => {
    switch (action.type) {
        case 'SELECT_LIST':
            selectedList = action.name
            break
        case 'DELETE_LIST':
            lists = lists.filter(list => list.name !== action.name)
            if (action.name === selectedList) {
                selectedList = lists[0].name
            }
            break
    }
    return { selectedList, lists }
}
