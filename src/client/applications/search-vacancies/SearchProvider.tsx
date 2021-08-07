import React, { createContext, useState } from "react";
// import { useGlobalStore, PeekMachine } from "../../hooks/use-global-state";

import { startMachine, peekMachine } from "./machine";

import SearchContext from "./context/stateContext";
import SearchVacancies from "./SearchVacancies";
export const DispatchSearch = createContext(null);

const authService = {
    name: "eugene peter maestrado",
};
const SearchVacanciesProvider = (props) => {
    const [state, send] = startMachine({
        message: "test",
    });
    const [actor, compare, interpretedSend] = peekMachine();
    console.log("ACTOR:", actor);
    // console.log("STATE:", state);

    const actions = {
        interpretedSend,
        send,
    };
    return (
        <SearchContext.Provider value={{ state, actor, actions }}>
            <DispatchSearch.Provider value={"test"}>
                {props.children}
            </DispatchSearch.Provider>
        </SearchContext.Provider>
    );
};

export default SearchVacanciesProvider;
