// Action Types
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const PREPARED_CARDS = 'PREPARED_CARDS'

// Action Creators
export const requestStart = () => ({
    type: REQUEST_START,
});

export const filteredCards = (data) => ({
    type: PREPARED_CARDS,
    payload: {data}
})

// Action Creators
export const requestSuccess = (data) => ({
    type: REQUEST_SUCCESS,
    payload: { cards: data }, // Ensure payload is an object with a 'cards' property
});

export const requestFailure = (error) => ({
    type: REQUEST_FAILURE,
    payload: error,
});

// Thunk
export const fetchDataFromServer = () => {
    return (dispatch) => {
        dispatch(requestStart());

        fetch('https://smolenksngo.ru/main')
            .then((response) => response.json())
            .then(response => {
                dispatch(requestSuccess(response));
            })
            .catch(error => {
                dispatch(requestFailure(error.message));
            });
    };
};

export const filteredData = (data) => {
    return (dispatch) => {
        dispatch(filteredCards(data));
    }
}

