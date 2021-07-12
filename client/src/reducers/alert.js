import { REMOVE_ALERT, SET_ALERT } from "../../src/actions/types"

// const initialState = []

const alertReducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_ALERT:
            return [...state, action.payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}

export default alertReducer;