import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
import { setState, loadState } from '../localstorage/localStorage';


const persistedState = loadState()

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => {
  setState(store.getState())
})

export default store;
