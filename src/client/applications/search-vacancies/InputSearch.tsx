import React, { useContext, useEffect, useState } from "react";
import SearchContext from "./context/stateContext";
import { DispatchSearch } from "./SearchProvider";
import { useDebounce } from "../../hooks";

const InputSearch = () => {
    const { actor, actions, interpret, useSelector } =
        useContext(SearchContext);
    const dispatch = useContext(DispatchSearch);

    const [searchInput, setSearchInput] = useState<string>("");

    const handleSubmit = () => {
        alert("SUBMIT");
    };

    const condition = (state) => {
        return state.matches("waiting_for_user_input");
    };

    const compare = useSelector(interpret, condition);

    useEffect(() => {
        setSearchInput("");
    }, [compare]);

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchInput(value);
        console.log("VALUE:", value);
        // actions.send();
    };

    useDebounce({
        input: searchInput,
        delay: 1000,
        dependency: searchInput,
        actions_type: "SEARCH_INPUT",
        send: actions.interpretedSend,
    });
    useEffect(() => {}, [searchInput]);
    return (
        <div>
            <h1 onClick={() => actions.interpretedSend("SOME_ACTION")}>
                SEARCH SOMETHING
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchInput}
                    placeholder="find vacancies"
                    onChange={handleChange}
                />
                {actor.matches("searching") && <h1>SEARCHING</h1>}
            </form>
            <ul>
                {actor?.context.query_results &&
                    actor?.context.query_results.map((item, key) => (
                        <li key={key}>{item.name}</li>
                    ))}
            </ul>
            <h1>{actor.value}</h1>
        </div>
    );
};

export default InputSearch;
