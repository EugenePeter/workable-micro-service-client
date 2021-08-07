import React, { useState, useEffect } from "react";

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
    const [state, setState] = useState();
    useEffect(() => {
        // do something
        const timeout = setTimeout(() => {
            console.log("DEBOUNCE INPUT:", input);
            send({
                type: actions_type,
                payload: input,
            });
        }, delay);
        return () => {
            clearTimeout(timeout);
            console.log("clearing timeout");
        };
    }, [dependency]);
};
