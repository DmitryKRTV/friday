import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {authReducer, FinalAuthActionTypes} from "../../n2-features/f1-auth/auth-reducer";
import {FinalProfileActionTypes, profileReducer} from "../../n2-features/f2-profile/profile-reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppRootState = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, AppActionsType>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, AppActionsType>
export type AppActionsType = FinalAuthActionTypes | FinalProfileActionTypes
// @ts-ignore
// window.store = store;