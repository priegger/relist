import * as React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { extractListState } from '../composition/store'

import { State } from './model/State'
import { selectList, deleteList } from './model/Actions'

import { Nav, Button } from 'react-bootstrap'

export interface ClickableListNamesComponentProps {
    onSelect: (name: string) => {}
    onDelete: (name: string) => {}
    listNames: string[]
    selected: string | undefined
}

export class ClickableListNamesComponent extends React.Component<ClickableListNamesComponentProps, {}> {
    public render(): JSX.Element {
        const items = this.props.listNames.map((value, index) => (
            <Nav.Item key={index}>
                <Nav.Link eventKey={value}>{value}</Nav.Link>
                <Button onClick={() => this.props.onDelete(value)} disabled={this.props.listNames.length === 1}>
                    X
                </Button>
            </Nav.Item>
        ))
        return (
            <Nav variant="tabs" activeKey={this.props.selected} onSelect={e => this.props.onSelect(e)}>
                {items}
            </Nav>
        )
    }
}

export const mapStateToProps = (state: State) => ({
    listNames: state.lists.map(l => l.name),
    selected: state.selectedList,
})

export const dispatchToProps = (dispatch: Dispatch) => ({
    onSelect: name => dispatch(selectList(name)),
    onDelete: name => dispatch(deleteList(name)),
})

export default connect(
    state => mapStateToProps(extractListState(state)),
    dispatch => dispatchToProps(dispatch)
)(ClickableListNamesComponent)
