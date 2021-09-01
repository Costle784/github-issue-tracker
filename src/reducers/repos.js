import { FETCH_REPOS } from "../actions/repos";

export default function repos(state = { loadingRepos: true }, action) {
    switch (action.type) {
        case FETCH_REPOS:
            return {
                loadingRepos: false,
                githubRepos: action.repos,
            };
        default:
            return state;
    }
}
