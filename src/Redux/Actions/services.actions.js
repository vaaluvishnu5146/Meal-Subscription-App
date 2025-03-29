export const SERVICES_ACTION_TYPES = {
    SAVE_ALL_SERVICES: "SAVE_ALL_SERVICES",
    FETCH_SERVICES_ERROR: "FETCH_SERVICES_ERROR"
};

// ACTION CREATOR
// Action creator is an Pure Function, that will return plain object
export function saveAllServices(type, payload) {
    // return function thunk(dispatch, getState) {
    //     console.log(dispatch, getState)
    //     return fetch('http://localhost:5173/outservices.json/').then((response) => response.json()).then((result) => result).catch(err => err)
    // }
    dispatch => {
        setTimeout(() => {
          // You can invoke sync or async actions with `dispatch`
          dispatch({ type: "SAVE_ALL_SERVICES" });
        }, 1000);
      };
}

// export function fetchTodoById(todoId) {
//     // fetchTodoByIdThunk is the "thunk function"
//     return async function fetchTodoByIdThunk(dispatch, getState) {
//       const response = await client.get(`/fakeApi/todo/${todoId}`)
//       dispatch(todosLoaded(response.todos))
//     }
//   }

// export function fetchHello() {
//     return dispatch => {
//       dispatch(isLoading(true));
//       fetch('http://5afa7456edf5520014cbd352.mockapi.io/hello-world')
//         .then(response => {
//           return response;
//         })
//         .then(response => response.json())
//         .then(json => {
//           dispatch(isLoading(false));
//           dispatch(helloResponse(json));
//         });
//     };
//   }