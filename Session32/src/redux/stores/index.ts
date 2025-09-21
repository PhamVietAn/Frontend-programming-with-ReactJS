import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counter";
import profileReducer from "../reducers/Profile";
import listUserReducer from "../reducers/listUser";
import randomReducer from "../reducers/random";
import changeStateString from "../reducers/changeState";
import changeThemeReducer from "../reducers/changeTheme";
import registerReducer from "../reducers/register";
import loginReducer from "../reducers/login";


const reducers = combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    listUser: listUserReducer,
    randomNumber: randomReducer,
    changeState: changeStateString,
    changeTheme: changeThemeReducer,
    register: registerReducer,
    login : loginReducer
});

const store = createStore(reducers);

export default store;
export type RootState = ReturnType<typeof store.getState>;