export const UPDATE_API_KEY = "UPDATE_API_KEY";

export function updateApiKey(apiKey) {
    return {
        type: UPDATE_API_KEY,
        apiKey,
    };
}
