import * as React from 'react'

import { List } from './model/List'

import { ListGroup, ListGroupItem } from 'react-bootstrap'

export interface ListProps {
    list: List
}

class ListComponent extends React.Component<ListProps, {}> {
    public render(): JSX.Element {
        const { list } = this.props
        const items = list.items.map((value, index) => <ListGroupItem key={index}>{value}</ListGroupItem>)
        return <ListGroup>{items}</ListGroup>
    }
}

export default ListComponent
