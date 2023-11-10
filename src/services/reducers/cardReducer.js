// cardReducer.js
const initState = {
    cards: [],
    preparedCards: [],
    loading: false,
    error: null,
};

export const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case "PREPARED_CARDS":
            return {...state, preparedCards: action.payload, loading: false, error: false}
        case "REQUEST_START":
            return { ...state, loading: true, error: null };
        case "REQUEST_SUCCESS":
            return { ...state, cards: action.payload, loading: false, error: null };
        case "REQUEST_FAILURE":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
