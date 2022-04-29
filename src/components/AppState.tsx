import { type } from "os";
import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import HotelReducer from "./HotelReducer";


export const RootReducer = combineReducers({HotelReducer});

export type AppState = ReturnType<typeof RootReducer>;

export const ConfigureStore = () => {
    return createStore(RootReducer, {}, devToolsEnhancer({})) 
}