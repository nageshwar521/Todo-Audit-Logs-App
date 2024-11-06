const initialState = {
    auditLogs: [],
    totalTasks: 0
}

const auditReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LOG':
            state = { ...state, auditLogs: [...state.auditLogs, action.payload] };
            if (action.payload === 'addTask') {
                state = { ...state, totalTasks: state.totalTasks + 1 };
            } else if (action.payload === 'deleteTask') {
                state = { ...state, totalTasks: state.totalTasks - 1 };
            }
            break;
        default:
    }
    return state;
}

export default auditReducer;