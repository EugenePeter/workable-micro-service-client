import { Machine, interpret } from "xstate";

import { IContext } from "./types";
import config from "./config";
import options from "./options";

const initial_context = {};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const spawn = (context: IContext) =>
    Machine(
        {
            ...config,
            context,
            ...initial_context,
        },
        options
    );

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Interpret = (context: IContext) => {
    const machine = spawn(context);
    const service = interpret(machine);
    return service;
};

export * from "./types";
