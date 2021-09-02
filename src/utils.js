export const sessionAPI = {
    getSessionItem(item) {
        return window.sessionStorage.getItem(item);
    },

    setSessionItem(key, value) {
        return window.sessionStorage.setItem(key, value);
    },
};
