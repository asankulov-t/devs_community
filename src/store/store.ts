import {SetArticleReducer} from "./Reducers/SetArticleReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {ReadPageReducer} from "./Reducers/ReadPageReducer";
import {TagReducer} from "./Reducers/TagReducer";


const combineReducer=combineReducers({
    SetArticleReducer:SetArticleReducer,
    ReadPageReducer:ReadPageReducer,
    TagReducer:TagReducer
})

export const store=createStore(combineReducer,applyMiddleware(thunk));
export type AppDispatch=typeof store.dispatch
export type AppRootType=ReturnType<typeof store.getState>