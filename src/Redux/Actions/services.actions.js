export const SERVICES_ACTION_TYPES = {
    SAVE_ALL_SERVICES: "SAVE_ALL_SERVICES",
    FETCH_SERVICES_ERROR: "FETCH_SERVICES_ERROR"
};

export function saveAllServices(type, payload) {
    return {type: type, payload: payload}
}