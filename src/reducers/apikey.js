import { UPDATE_API_KEY } from "../actions/apikey";

export default function apikey(state = "", action) {
    switch (action.type) {
        case UPDATE_API_KEY:
            return action.apiKey;
        default:
            return state;
    }
}
