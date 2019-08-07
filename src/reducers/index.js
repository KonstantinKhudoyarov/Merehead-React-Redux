export const currentPageReducer = (state, action) => {
    if (action.type === 'SET_CURRENT_PAGE') {
        const newState = state.currentPage = action.page;
        return newState;
    }

    return state;
} 