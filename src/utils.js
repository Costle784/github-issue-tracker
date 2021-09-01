export function formatDate(timestamp) {
    const date = new Date(timestamp);
    return `${date.getDate().toString()}/${
        date.getMonth() + 1
    }/${date.getFullYear()}`;
}

export const sessionAPI = {
    getSessionItem(item) {
        return window.sessionStorage.getItem(item);
    },

    setSessionItem(key, value) {
        return window.sessionStorage.setItem(key, value);
    },
};
