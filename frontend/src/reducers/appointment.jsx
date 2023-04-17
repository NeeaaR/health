import {
    GET_APPOINTMENTS,
    GET_APPOINTMENT,
    ADD_APPOINTMENT,
    DELETE_APPOINTMENT,
    APPOINTMENT_ERROR,
    GET_RESERVEDSLOTSID
} from "../actions/types";

const initialState = {
    appointment: null,
    appointments: [],
    loading: true,
    error : {}
};

export default function(state = initialState, action){
    const {type, payload} = action;

    switch (type) {
        case GET_APPOINTMENTS:
            return { ...state, appointments: payload, loading: false};
        case GET_APPOINTMENT:
            return { ...state, appointment: payload, loading: false};
        case GET_RESERVEDSLOTSID:
            return { ...state, appointments: payload, loading: false};
        case ADD_APPOINTMENT:
            return { ...state, appointments: [payload, ...state.appointments], loading: false};
        case APPOINTMENT_ERROR:
            return { ...state, error: payload, loading: false};
        case DELETE_APPOINTMENT:
            return {
                ...state,
                appointments : [ ...state.appointments.filter(appointment => appointment.id !== payload)],
                loading: false
            };
        default:
            return state;
    }
}