import { combineReducers, createStore } from 'redux';
import studentReducer from '../reducers/studentReducer';

const reducers = combineReducers({
    student: studentReducer
})

const store = createStore(reducers)
export default store;
export type RootState = ReturnType<typeof store.getState>;