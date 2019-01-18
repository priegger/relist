import * as React from 'react'
import { hot } from 'react-hot-loader/root'

import ListSelector from '../lists/ListSelector'
import SelectedList from '../lists/SelectedList'

export const App = () => (
    <div>
        <ListSelector />
        <SelectedList />
    </div>
)

export default hot(App)
