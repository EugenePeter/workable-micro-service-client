import React, { useContext, useEffect, useState } from "react";
import SearchContext from "./context/stateContext";
import { DispatchSearch } from "./SearchProvider";
import { useDebounce } from "../../hooks";

const InputSearch = () => {
    const { actor, actions } = useContext(SearchContext);
    const dispatch = useContext(DispatchSearch);

    const [searchInput, setSearchInput] = useState();

    const handleSubmit = () => {
        alert("SUBMIT");
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);
        console.log("VALUE:", value);
        // actions.send();
    };

    useDebounce({
        input: searchInput,
        delay: 500,
        dependency: searchInput,
        actions_type: "SEARCH_INPUT",
        send: actions.interpretedSend,
    });
    useEffect(() => {}, [searchInput]);
    return (
        <div>
            <h1 onClick={() => actions.interpretedSend("SOME_ACTION")}>
                CLICK ME
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchInput}
                    placeholder="find vacancies"
                    onChange={handleChange}
                />
            </form>
            <h1>{actor.value}</h1>
        </div>
    );
};

export default InputSearch;
