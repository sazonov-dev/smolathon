// Action Types
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

// Action Creators
export const requestStart = () => ({
    type: REQUEST_START,
});

export const requestSuccess = (data) => ({
    type: REQUEST_SUCCESS,
    payload: data,
});

export const requestFailure = (error) => ({
    type: REQUEST_FAILURE,
    payload: error,
});

// Thunk
export const fetchDataFromServer = () => {
    return (dispatch) => {
        dispatch(requestStart());

        fetch('http://localhost:3000')
            .then((response) => response.json())
            .then(response => {
                dispatch(requestSuccess(response.data));
            })
            .catch(error => {
                dispatch(requestFailure(error.message));
            });
    };
};

