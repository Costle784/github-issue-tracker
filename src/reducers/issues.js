import { FETCH_ISSUES } from "../actions/issues";

export default function issues(state = [], action) {
    switch (action.type) {
        case FETCH_ISSUES:
            return action.issues;
        default:
            return state;
    }
}
