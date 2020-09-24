import { createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '../API/localStorage'
import { throttle } from 'lodash';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState.state, composeWithDevTools())

store.subscribe(throttle(() => {
    saveState({
        state: store.getState()
    });
}, 1000));

export default store;
