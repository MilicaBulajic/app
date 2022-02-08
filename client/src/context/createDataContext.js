import React, { useReducer } from "react";

// eslint-disable-next-line import/no-anonymous-default-export 
export default (reducer, actions, initialState) => {
  //Creating the context
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
    //Providing the context
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
