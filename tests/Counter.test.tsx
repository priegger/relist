import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as TestUtils from 'react-dom/test-utils'
import Counter from '../src/Counter'

describe(Counter.name, () => {
    it('renders title', () => {
        // when
        const element = TestUtils.renderIntoDocument(<Counter />) as Element
        const node = ReactDOM.findDOMNode(element)!

        // then
        expect(node).toMatchSnapshot()
    })
})
