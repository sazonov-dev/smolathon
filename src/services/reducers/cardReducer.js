// cardReducer.js
const initState = {
    title: "fsdfsdf",
    description: "fdsfsdfsdfdsf",
    image_name: "https://cdn.readovka.ru/n/12764/1200x630/49152fbcd9.jpg",
    location: "улица Войкова, 12",
    events: [
        { date: "13.10.2023", time: "14:30" },
        { date: "14.10.2023", time: "18:30" }
    ],
    phone_number: "+79393332112"
};

export const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case "REQUEST_START":
            return { ...state, loading: true };
        case "REQUEST_SUCCESS":
            return { ...state, ...action.payload, loading: false };
        case "REQUEST_FAILURE":
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
};
