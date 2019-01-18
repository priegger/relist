import * as React from 'react'
import { ClickableListNamesComponent, mapStateToProps, dispatchToProps } from '../../src/lists/ListSelector'
import { mount } from '../test-utils'
import { initialState } from '../../src/lists/model/State'

describe('ClickableListNamesComponent', () => {
    const onSelect = jest.fn()
    const onDelete = jest.fn()

    beforeEach(() => {
        jest.restoreAllMocks()
    })

    it('renders empty list', () => {
        const wrapper = mount(createElement())
        expect(wrapper).toMatchSnapshot()
    })

    it('renders list', () => {
        const wrapper = mount(createElement(['list1', 'list2'], 'list1'))
        expect(wrapper).toMatchSnapshot()
    })

    it('calls on select', () => {
        const wrapper = mount(createElement(['list1', 'list2'], 'list1'))
        wrapper
            .find('.nav .nav-item a')
            .at(1)
            .simulate('click')
        expect(onSelect).toHaveBeenCalledWith('list2')
    })

    function createElement(listNames: string[] = [], selected?: string): JSX.Element {
        return <ClickableListNamesComponent onSelect={onSelect} onDelete={onDelete} listNames={listNames} selected={selected} />
    }
})

describe('mapStateToProps', () => {
    it('extracts list names', () => {
        expect(mapStateToProps(initialState).listNames).toEqual(['list1', 'list2', 'list3'])
    })
    it('extracts name of selected list', () => {
        expect(mapStateToProps(initialState).selected).toEqual('list1')
    })
})

describe('dispatchToProps', () => {
    const dispatch = jest.fn()
    beforeEach(() => {
        jest.restoreAllMocks()
    })

    it('dispatches to SELECT_LIST on select', () => {
        dispatchToProps(dispatch).onSelect('someSelectedList')
        expect(dispatch).toHaveBeenCalledWith({ name: 'someSelectedList', type: 'SELECT_LIST' })
    })

    it('dispatches to DELETE_LIST on delete', () => {
        dispatchToProps(dispatch).onDelete('someDeletedList')
        expect(dispatch).toHaveBeenCalledWith({ name: 'someDeletedList', type: 'DELETE_LIST' })
    })
})
