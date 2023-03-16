import { createSlice } from "@reduxjs/toolkit";

const initialValue = null;
export const useFinalCheck = createSlice({
  name: "final",
  initialState: { value: initialValue },
  reducers: {
    addObj: (state, action) => {
      state.value = action.payload.items;
    },
    RemoveData: (state, action) => {
      state.value = state.value.id !== action.payload.id;
    },
  },
});

export const { addObj, RemoveData } = useFinalCheck.actions;
export default useFinalCheck.reducer;
