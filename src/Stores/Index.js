import { createStore } from "redux";
import { persistStore , persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { RootReducer } from "Stores/Reducer/RootReducer";

const persistConfig = {
  key:"root",
  storage
}

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);