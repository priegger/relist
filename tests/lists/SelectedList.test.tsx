import { mapStateToProps } from '../../src/lists/SelectedList'
import { List } from '../../src/lists/model/List'

const list1: List = { items: [], name: 'list1' }
const list2: List = { items: [], name: 'list2' }

describe('mapStateToProps', () => {
    it('maps to undefined if selected list cannot be found', () => {
        expect(mapStateToProps({ lists: [], selectedList: '' }).list).toBeUndefined()
        expect(mapStateToProps({ lists: [list1], selectedList: 'list2' }).list).toBeUndefined()
    })

    it('extracts the found list', () => {
        expect(mapStateToProps({ lists: [list2], selectedList: 'list2' }).list).toEqual(list2)
        expect(mapStateToProps({ lists: [list1, list2], selectedList: 'list2' }).list).toEqual(list2)
    })
})
