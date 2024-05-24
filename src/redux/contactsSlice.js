import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContact: (state) => state.items,
    selectLoading: (state) => state.loading,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = [...state.items, payload];
        console.log(state.items);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter((item) => item.id !== payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, { payload }) => {
          state.loading = false;
          state.error = payload;
        }
      );
  },
});
export const { selectContact, selectLoading, selectError } =
  contactsSlice.selectors;

export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectContact],
  (nameFilter, contacts) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
  }
);

export const contactsReducer = contactsSlice.reducer;
