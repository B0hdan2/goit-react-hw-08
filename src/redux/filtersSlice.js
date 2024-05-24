import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectNameFilter: (state) => state.name,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
export const { selectNameFilter } = filtersSlice.selectors;
