import { createSlice } from "@reduxjs/toolkit";
import Data from "../Utility/Data";

const initialValue = Data;
export const useImage = createSlice({
  name: "list",
  initialState: { value: initialValue },
  reducers: {
    addChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addChange } = useImage.actions;
export default useImage.reducer;
