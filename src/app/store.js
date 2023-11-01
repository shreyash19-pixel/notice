import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import reducer from "../actions/reducer";
import thunk from "redux-thunk";


const store = createStore(reducer, applyMiddleware(thunk))

export default store