const BASE_URL = "https://api.github.com";
const REPOS = "user/repos";
// Use public repositories endpoint for more open issues if necessary
// const REPOS = "repositories";

const makeGETRequest = async function (resourceUrl, key, params = {}) {
    const url = new URL(resourceUrl);
    url.search = new URLSearchParams(params).toString();

    let res = await fetch(url, {
        headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `Basic ${btoa(key)}`,
        },
    });
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
};

export const API = {
    getRepos(key) {
        return makeGETRequest(`${BASE_URL}/${REPOS}`, key);
    },
    getIssues(key, issuesUrl, params = {}) {
        return makeGETRequest(issuesUrl, key, params);
    },
};
