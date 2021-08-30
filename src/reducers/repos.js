import { RECEIVE_DATA } from "../actions/repos";

export default function repos(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.repos;
        default:
            return state;
    }
}
