import { reducer } from '../../src/lists/reducers'
import { initialState } from '../../src/lists/model/State'
import { deleteList, selectList } from '../../src/lists/model/Actions'

describe('deleteList', () => {
    it('has no effect on lists', () => {
        expect(reducer(initialState, deleteList('list2')).lists).toEqual(initialState.lists)
    })
    it('has no effect on selected lists', () => {
        expect(reducer(initialState, deleteList('list2')).selectedList).toEqual(initialState.selectedList)
    })
})

describe('selectList', () => {
    it('has no effect on lists', () => {
        expect(reducer(initialState, selectList('list2')).lists).toEqual(initialState.lists)
    })
    it('selects lists', () => {
        expect(reducer(initialState, selectList('list2')).selectedList).toEqual('list2')
    })
})
