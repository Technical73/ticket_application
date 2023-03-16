import { createSlice } from "@reduxjs/toolkit";

const initialValue = [];
export const useReducer = createSlice({
  name: "user",
  initialState: { value: initialValue },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter(
        (items) => items.id !== action.payload.id
      );
    },
  },
});
export const { addUser, deleteUser } = useReducer.actions;
export default useReducer.reducer;
