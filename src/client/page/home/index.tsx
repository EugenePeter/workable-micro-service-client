import React, { useContext } from "react";
import SearchVacancies from "../../applications/search-vacancies/SearchVacancies";
import SearchVacanciesProvider from "../../applications/search-vacancies/SearchProvider";
import SearchContext from "../../applications/search-vacancies/context/stateContext";
const Home = () => {
    const context = useContext(SearchContext);
    console.log("CONTEXT FROM HOME:", context);
    return (
        <div>
            <SearchVacancies />
        </div>
    );
};

export default Home;
