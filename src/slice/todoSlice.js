import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  {
    id: 1,
    title: "Go to work at 9:00 am",
  },
];
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
  //   initialState,
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
