import { connect } from 'react-redux'

import ListComponent from './List'

import { State } from './model/State'
import { extractListState } from '../composition/store'

export const mapStateToProps = ({ lists, selectedList }: State) => ({
    list: lists.find(l => l.name === selectedList),
})

export default connect(
    state => mapStateToProps(extractListState(state)),
    () => ({})
)(ListComponent)
