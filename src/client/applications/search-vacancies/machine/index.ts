import { Machine, interpret, createMachine } from "xstate";
import { useInterpret, useMachine, useActor, useSelector } from "@xstate/react";

import { IContext } from "./types";
import config from "./config";
import options from "./options";

const initial_context: any = {
    machine_type: "",
    test: "hey",
    hello: {
        message: "this is a message",
    },
    message: "",
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const spawn = (context: IContext) =>
    createMachine(
        {
            ...config,
            context: {
                ...initial_context,
                ...context,
            },
        },
        options
    );

let running_machine;
export const startMachine = (context) => {
    const machine = spawn(context);
    const [state, send] = useMachine(machine);
    running_machine = machine;
    return [state, send, machine];
};

const condition = (state) => {
    return state.matches("loading");
};

export const peekMachine = () => {
    const interpret = useInterpret(running_machine);
    console.log("interpret:", interpret);
    const { send: interpretedSend } = interpret;
    const [actor] = useActor(interpret);
    const compare = useSelector(interpret, condition);
    return [actor, compare, interpretedSend];
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

export * from "./types";
