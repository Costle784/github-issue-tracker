const BASE_URL = "https://api.github.com";

const REPOS = "user/repos";

const ISSUES_PATH = ``;

const makeRequest = async function (url, key) {
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
        return makeRequest(`${BASE_URL}/${REPOS}`, key);
    },
};
