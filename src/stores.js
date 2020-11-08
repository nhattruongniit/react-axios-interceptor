import { createStore, combineReducers } from "redux";

// reducers
import app from './reducers/app.reducer';

const rootReducers = combineReducers({
  app
});

const store = createStore(rootReducers);

export default store;
