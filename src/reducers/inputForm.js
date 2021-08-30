import { UPDATE_API_KEY } from "../actions/inputForm";

export default function inputForm(state = {}, action) {
    switch (action.type) {
        case UPDATE_API_KEY:
            return {
                ...state,
                apiKey: action.apiKey,
            };
        default:
            return state;
    }
}
