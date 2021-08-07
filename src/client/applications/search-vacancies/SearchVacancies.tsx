import React, { useContext } from "react";
import { useActor } from "@xstate/react";

import StateContext from "./context/stateContext";
import SearchVacanciesProvider from "./SearchProvider";
import InputSearch from "./InputSearch";

const SearchVacancies = (props) => {
    const test = useContext(StateContext);
    console.log("TEST:", test);
    return (
        <SearchVacanciesProvider>
            <h1> mo work kaha naa</h1>;
            <InputSearch />
        </SearchVacanciesProvider>
    );
};

export default SearchVacancies;
