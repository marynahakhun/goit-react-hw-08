
import { contactReducer } from "./contacts/slice";
import { filterReducer } from "./filters/slice";
import { authReducer } from "./auth/slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token"]
}
const persistedAuthReducer = persistReducer(persistConfig, authReducer)
export const rootReducer = {
    contacts: contactReducer,
    auth: persistedAuthReducer,
    filters: filterReducer
  }


export default rootReducer;