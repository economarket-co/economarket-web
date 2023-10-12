import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";


export const StateContext = createContext();

export const StateProvider = ({children}) =>(

    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStatevalue = () => useContext(StateContext);