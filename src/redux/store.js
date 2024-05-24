import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
  devTools: import.meta.env.MODE !== "productions",
});
