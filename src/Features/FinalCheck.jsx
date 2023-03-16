import { createSlice } from "@reduxjs/toolkit";

const initialValue = null;
export const useFinalCheck = createSlice({
  name: "final",
  initialState: { value: initialValue },
  reducers: {
    addObj: (state, action) => {
      state.value = action.payload.items;
    },
  },
});

export const { addObj } = useFinalCheck.actions;
export default useFinalCheck.reducer;
