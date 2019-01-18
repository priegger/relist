import { List } from './List'

export interface State {
    selectedList: string
    lists: List[]
}

export const initialState: State = {
    selectedList: 'list1',
    lists: [
        { name: 'list1', items: ['a', 'b', 'c', 'd', 'e'] },
        { name: 'list2', items: ['a', 'b'] },
        {
            name: 'list3',
            items: ['a', 'b', 'c', 'd', 'e', 'c', 'd', 'e', 'c', 'd', 'e'],
        },
    ],
}
