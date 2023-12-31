const initState = {
    themeId: 1,
}
type InitStateType = {
    themeId: number
}
export const themeReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any

// type ChangeThemeIdActionType = ReturnType<typeof changeThemeId>
type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}
type ActionsType = ChangeThemeIdActionType
