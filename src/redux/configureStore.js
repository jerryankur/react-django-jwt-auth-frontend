import {applyMiddleware, combineReducers, createStore} from "redux";
import {createForms} from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {InitialAccount} from "./forms";
import {UserData} from "./userData";

export const ConfigureStore = () => {
	return createStore(
		combineReducers({
			userData: UserData,
			...createForms({
				account: InitialAccount
			})
		}),
		applyMiddleware(thunk, logger)
	);
}