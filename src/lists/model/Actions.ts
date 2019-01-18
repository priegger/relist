export type ListAction = SelectListAction | DeleteListAction

export interface Action<Name> {
    type: Name
}

export type DeleteListAction = Action<'DELETE_LIST'> & { name: string }
export type SelectListAction = Action<'SELECT_LIST'> & { name: string }

export function selectList(name: string): SelectListAction {
    return { type: 'SELECT_LIST', name }
}

export function deleteList(name: string): DeleteListAction {
    return { type: 'DELETE_LIST', name }
}
