export const addTask = (payload) => ({
    type: 'ADD_TASK',
    payload
});

export const editTask = (payload) => ({
    type: 'EDIT_TASK',
    payload
});

export const updateTask = (payload) => ({
    type: 'UPDATE_TASK',
    payload
});

export const deleteTask = (payload) => ({
    type: 'DELETE_TASK',
    payload
});