import { MachineConfig, AnyStateNodeDefinition } from "xstate";
import { IContext, IMachineEvents } from "./types";

const config: MachineConfig<IContext, AnyStateNodeDefinition, IMachineEvents> =
    {
        initial: "loading",
        states: {
            loading: {
                on: {
                    SOME_ACTION: {
                        target: "ready",
                    },
                },
            },
            ready: {
                entry: [() => console.log("INSIDE READY STATE")],
            },
        },
    };

export default config;
