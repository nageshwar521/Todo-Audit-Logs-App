const initialState = {
    tasks: [],
    editTaskItem: null
}

const taskReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TASK': {
            const { tasks } = state;
            let newTasks = [action.payload, ...tasks];
            state = { ...state, tasks: newTasks };
            break;
        }
        case 'EDIT_TASK': {
            console.log('EDIT_TASK')
            state = { ...state, editTaskItem: action.payload };
            break;
        }
        case 'UPDATE_TASK': {
            const { tasks, editTaskItem } = state;
            if (editTaskItem) {
                let newTasks = tasks.map((task) => {
                    return editTaskItem.id === task.id ? { ...task, ...action.payload } : task;
                });
                state = { ...state, tasks: newTasks, editTaskItem: null };
            }
            break;
        }
        case 'DELETE_TASK': {
            const newTasks = state.tasks.filter((task) => (task.id !== action.payload));
            state = { ...state, tasks: newTasks };
            break;
        }
        default:
    }
    console.log(state)
    return state;
}

export default taskReducer;