const initialState = {
    pageFormatDefault: true
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_PAGE_FORMAT":
            return { ...state, pageFormatDefault: !state.pageFormatDefault }
        default:
            return state
    }
} 