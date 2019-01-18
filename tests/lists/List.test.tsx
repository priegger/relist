import * as React from 'react'
import List from '../../src/lists/List'
import { mount } from '../test-utils'

describe('List', () => {
    describe('with two items', () => {
        const list = { name: 'listName', items: ['item1', 'item2'] }
        const component = <List list={list} />
        it('renders snapshot', () => {
            const element = mount(component)
            expect(element).toMatchSnapshot()
        })

        it('renders item names of a list', () => {
            const element = mount(<List list={list} />)
            const items = element.find('div.list-group-item')
            expect(items.at(0).text()).toEqual('item1')
            expect(items.at(1).text()).toEqual('item2')
        })
    })
})
