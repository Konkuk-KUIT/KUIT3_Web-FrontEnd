import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { useMemo } from "react";

const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
  })
  return store;
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store;
}
