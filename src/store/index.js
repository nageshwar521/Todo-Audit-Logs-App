import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskReducer";
import auditReducer from "./auditReducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
    audits: auditReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;