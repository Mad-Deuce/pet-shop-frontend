import { createSlice } from "@reduxjs/toolkit";

import {
  fetchTodoThunk,
  addTodoThunk,
  deleteTodoThunk,
  toggleCompletedTodoThunk,
} from "./todo-thunks";

import { pending, rejected } from "../../shared/utils/redux";

const toDoInitialState = {
  loading: false,
  error: null,
  items: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: toDoInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoThunk.pending, pending)
      .addCase(fetchTodoThunk.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchTodoThunk.rejected, rejected)
      .addCase(addTodoThunk.pending, pending)
      .addCase(addTodoThunk.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(addTodoThunk.rejected, rejected)
      .addCase(deleteTodoThunk.pending, pending)
      .addCase(deleteTodoThunk.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = store.items.filter((item) => item.id !== payload);
      })
      .addCase(deleteTodoThunk.rejected, rejected)
      .addCase(toggleCompletedTodoThunk.pending, pending)
      .addCase(toggleCompletedTodoThunk.fulfilled, (store, { payload }) => {
        store.loading = false;
        const todo = store.items.find((item) => item.id === payload);
        todo.completed = !todo.completed;
      })
      .addCase(toggleCompletedTodoThunk.rejected, rejected);
  },
});

export default todoSlice.reducer; 