export const currentPageReducer = (state, action) => {
    if (action.type === 'SET_CURRENT_PAGE') {
        return {
            ...state,
            currentPage: action.page
        };
    }

    return state;
} 