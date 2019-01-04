import * as ReactDOM from 'react-dom'
import * as TestUtils from 'react-dom/test-utils'
import App from '../src/App'

describe(App.name, () => {
    it('renders title', () => {
        // when
        const element = TestUtils.renderIntoDocument(App()) as Element

        const node = ReactDOM.findDOMNode(element)!

        expect(node).toMatchSnapshot()
    })
})
