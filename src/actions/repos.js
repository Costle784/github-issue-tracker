import { API } from "../api";
export const RECEIVE_DATA = "RECEIVE_DATA";

function receiveDataAction(repos) {
    return {
        type: RECEIVE_DATA,
        repos,
    };
}

export function handleRepos(key, history) {
    return (dispatch) => {
        return API.getRepos(key)
            .then((res) => {
                dispatch(receiveDataAction(res));
            })
            .catch((e) => {
                console.error(e);
                history.push("/");
            });
    };
}
