import {
    GET_AVAILABLESLOT,
    GET_AVAILABLESLOTS,
    ADD_AVAILABLESLOT,
    DELETE_AVAILABLESLOT,
    AVAILABLESLOT_ERROR,
} from "../actions/types";

const initialState = {
    slot: null,
    slots: [],
    loading: true,
    error : {}
};

export default function(state = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case GET_AVAILABLESLOT:
            return { ...state, slot: payload, loading: false};
        case GET_AVAILABLESLOTS:
            return { ...state, slots: payload, loading: false};
        case ADD_AVAILABLESLOT:
            return { ...state, slots: [payload, ...state.slots], loading: false};
        case AVAILABLESLOT_ERROR:
            return { ...state, error: payload, loading: false};
        case DELETE_AVAILABLESLOT:
            return {
                ...state,
                slots : [ ...state.slots.filter(slot => slot.id !== payload)],
                loading: false
            };
        default:
            return state;
    }
}