import * as React from 'react'

import { App } from '../../src/composition/App'
import { shallow, mount } from '../test-utils'

import { Provider } from 'react-redux'

import { createStore } from '../../src/composition/store'
const store = createStore()

describe('App', () => {
    it('renders shallow', () => {
        const element = shallow(<App />)
        expect(element).toMatchSnapshot()
    })

    it('renders deeply', () => {
        const element = mount(
            <Provider store={store}>
                <App />
            </Provider>
        )
        expect(element).toMatchSnapshot()
    })
})
