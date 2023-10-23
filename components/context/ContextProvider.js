import React, { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./reducers";
const initialState = {
  user: null
};
// Create a context
const Context = createContext(initialState);
export const useValue = () => {
    return useContext(Context)
}
// Create a provider component
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <Context.Provider value={{state,dispatch }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
