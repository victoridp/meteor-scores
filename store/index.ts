import {
    combineReducers,
    configureStore,
    Dispatch,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import itemsList from "./itemsList";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: [],
};

const appReducer = combineReducers({
    itemsList
});

const resettableRootReducer = (state: any, action: any) => {
    if (action.type === "RESET") {
        // TODO: resetToken()
        storage.removeItem("persist:root")
          return appReducer(undefined, action);
    }
    return appReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, resettableRootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const logoutUser = () => async (dispatch: Dispatch) => {
    await persistor.purge();
    dispatch({ type: "RESET" });
};
export default store;
export let persistor = persistStore(store);

// Common types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export hooks that can be reused to resolve types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;