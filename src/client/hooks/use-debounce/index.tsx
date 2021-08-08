import React, { useState, useEffect, useMemo, useCallback } from "react";

interface ISend {
    type: string;
    payload?: any;
}

interface IDebounceParams {
    input: string;
    delay: number;
    dependency: string;
    actions_type?: string;
    send?: (params: ISend) => void;
}
export const useDebounce = ({
    input,
    delay,
    dependency,
    actions_type,
    send,
}: IDebounceParams) => {
    const [state, setState] = useState("");

    useEffect(() => {
        input && input != undefined && input != null && setState(input);
    }, [input]);

    console.log("DEBOUNCE STATE:", state);

    useEffect(() => {
        // do something
        const timeout = setTimeout(() => {
            console.log("DEBOUNCE INPUT:", input);
            input &&
                send({
                    type: actions_type,
                    payload: input,
                });
        }, delay);
        return () => {
            clearTimeout(timeout);
            console.log("clearing timeout");
        };
    }, [state]);
};
