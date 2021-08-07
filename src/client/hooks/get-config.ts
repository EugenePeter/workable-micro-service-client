export const getConfig = (config) => {
    console.log("machine type:", config);
    if (config === "SEARCH_VACANCIES")
        return import("../applications/search-vacancies/machine-config")
            .then((config) => {
                console.log("CONFIG:", config.default);
                return config.default;
            })
            .catch((e) => console.log("ERROR GETTING CONFIG:", e));
};
