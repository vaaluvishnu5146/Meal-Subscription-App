export const SUBSCRIPTIONS_ACTION_TYPES = {
    SAVE_ALL_SUBSCRIPTIONS: "SAVE_ALL_SUBSCRIPTIONS",
    FETCH_SUBSCRIPTIONS_ERROR: "FETCH_SUBSCRIPTIONS_ERROR"
};

export function saveAllSubscriptionsData(type) {
    return { type: type, payload: [] }
}