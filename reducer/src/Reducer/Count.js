
export const initialState = {
    count: 0
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_INCREASE":
            return { ...state, count: state.count + 1 };
        case "SET_DECREASE":
            return { ...state, count: state.count - 1 };
        case "SET_RESET":
            return { ...state, count: 0 };

        default:
            return state;
    }
}