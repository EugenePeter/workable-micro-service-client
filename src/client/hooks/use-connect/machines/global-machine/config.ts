import { MachineConfig, AnyStateNodeDefinition } from "xstate";
import { IContext, IMachineEvents } from "./types";

const config: MachineConfig<IContext, AnyStateNodeDefinition, IMachineEvents> =
    {
        invoke: [
            {
                id: "socketConnectionService",
                src: "connectToSocketServer",
            },
        ],
        initial: "boot",
        states: {
            loading: {},
            ready: {},
        },
    };

export default config;
