import { API } from "../api";
export const FETCH_REPOS = "FETCH_REPOS";

function fetchReposAction(repos) {
    return {
        type: FETCH_REPOS,
        repos,
    };
}

export function handleRepos(key, redirect) {
    return (dispatch) => {
        return API.getRepos(key)
            .then((res) => {
                dispatch(fetchReposAction(res));
            })
            .catch((e) => {
                console.error(e);
                redirect();
            });
    };
}
