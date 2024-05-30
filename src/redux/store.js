import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./slices/expenseSlice";

const store = configureStore({
  reducer: {
    expense: expensesReducer,
  },
});

export default store;
