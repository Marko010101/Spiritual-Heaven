import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  fullName: "",
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "userRegistered":
      console.log("userRegistered action dispatched:", action.payload);
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email,
        password: action.payload.password,
      };
    case "userLogout":
      return {
        ...state,
        fullName: "",
        email: "",
        password: "",
      };
    default:
      throw new Error("Unknown action");
  }
}

function InfoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function useInfoUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("InfoContext was used outside of the InfoProvider");
  return context;
}

export { InfoProvider, useInfoUser };
