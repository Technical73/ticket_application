import { createSlice } from "@reduxjs/toolkit";

export const useCheck = createSlice({
  name: "check",
  initialState: { value: false },
  reducers: {
    submitted: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const { submitted } = useCheck.actions;
export default useCheck.reducer;
