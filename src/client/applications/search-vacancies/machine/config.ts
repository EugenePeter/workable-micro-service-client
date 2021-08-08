import { MachineConfig, AnyStateNodeDefinition } from "xstate";
import { IContext, IMachineEvents } from "./types";

const config: MachineConfig<IContext, AnyStateNodeDefinition, IMachineEvents> =
    {
        initial: "waiting_for_user_input",
        on: {
            SEARCH_INPUT: {
                actions: [
                    (_, event) => console.log("SEARCH INPUT RECIEVED:", event),
                    // "sendSearchInputToService",
                    "assignQueryTermsToContext",
                ],
                target: "searching",
            },
        },
        states: {
            waiting_for_user_input: {
                id: "loading",
                entry: [(context) => console.log("CONTEXT:", context)],
            },
            searching: {
                id: "search",
                invoke: [
                    {
                        id: "socketConnectionService",
                        src: "connectToSocketServer",
                    },
                ],
                entry: [
                    (_, event) => console.log("SEARCHINggggG:", event),
                    (context) => console.log("CONTEXT:", context),
                ],
                on: {
                    GOT_QUERY_RESULTS: {
                        actions: ["assignQueryResultsToContext"],
                        target: "waiting_for_user_input",
                    },
                },
            },
        },
    };

export default config;
