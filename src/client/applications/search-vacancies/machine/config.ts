import { MachineConfig, AnyStateNodeDefinition } from "xstate";
import { IContext, IMachineEvents } from "./types";

const config: MachineConfig<IContext, AnyStateNodeDefinition, IMachineEvents> =
    {
        initial: "loading",
        on: {
            SEARCH_INPUT: {
                actions: [
                    (_, event) => console.log("SEARCH INPUT RECIEVED:", event),
                ],
                target: "#search",
            },
        },
        states: {
            loading: {},
            search: {
                id: "search",
                entry: [],
            },
        },
    };

export default config;
