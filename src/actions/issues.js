import { API } from "../api";
export const FETCH_ISSUES = "FETCH_ISSUES";

function fetchIssuesAction(issues) {
    return {
        type: FETCH_ISSUES,
        issues,
    };
}

export function handleIssues(key, url, params) {
    return (dispatch) => {
        return API.getIssues(key, url, params)
            .then((res) => {
                dispatch(fetchIssuesAction(res));
            })
            .catch(console.error);
    };
}
