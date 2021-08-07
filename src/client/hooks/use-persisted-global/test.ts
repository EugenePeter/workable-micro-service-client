import { useMemo } from "react";
import { useMachine, State } from "@xstate/react";

export const useGlobalStore = async (a: any, b: any) => {
    const { spawn } = await import("./machines/global-machine");
    const machine = spawn({ a, b });
    const [state, send] = useMachine(machine);

    const cachedGlobalState = useMemo(() => {
        const stateToPersist = JSON.stringify(state);
        try {
            localStorage.setItem("global-state", stateToPersist);
        } catch (e) {
            console.log("error", e);
        }
        if (!state) return;
        const stateDefinition = JSON.parse(localStorage.getItem("global-state"));
        return State.create(stateDefinition);
    }, []);

    return [cachedGlobalState, send];
};
