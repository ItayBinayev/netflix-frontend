import { createContext } from "react";
import { useReducer } from "react";
import { StoreReducer } from "../Reducers/StoreReducer";

export const Store = createContext();

const initState = {
    userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) : null,
    isMuted: true
}

export function StoreProvider( props ) {
    const [state, dispatch] = useReducer(StoreReducer, initState);
    const  body = {
        state,
        dispatch
    }
    return (
        <Store.Provider value={body}>
            {props.children}
        </Store.Provider>
    )
}