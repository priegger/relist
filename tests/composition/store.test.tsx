import { extractListState } from '../../src/composition/store'

import { initialState as initialListState } from '../../src/lists/model/State'

describe('extractListState', () => {
    it('extracts list state', () => {
        expect(extractListState({ lists: initialListState })).toEqual(initialListState)
    })
})
