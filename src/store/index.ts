import { AppReducer } from './../reducers/index';
import { createStore } from "redux";

export const AppStore = createStore(AppReducer);