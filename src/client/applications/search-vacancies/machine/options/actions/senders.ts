import { ActionFunctionMap, send } from "xstate";
import { IContext, IMachineEvents } from "../../types";

const actions: ActionFunctionMap<IContext, IMachineEvents> = {
    // invokeWorkflow: send(
    //     ({ workflow_type, params, persist }) => ({
    //         type: "WORKFLOW",
    //         workflow_type,
    //         params,
    //         persist,
    //     }),
    //     { to: "socketConnectionService" }
    // ),
    // sendAuthKey: send(
    //     () => ({
    //         type: "AUTHORIZE",
    //         payload: {
    //             key: "DNAMicro!!",
    //         },
    //     }),
    //     { to: "socketConnectionService" }
    // ),
    // sendToSocketService: send(
    //     ({ workflow_type }, e) => ({
    //         type: "WORKFLOW_INPUT",
    //         workflow_type,
    //         payload: e,
    //     }),
    //     { to: "socketConnectionService" }
    // ),
    sendSearchInputToService: send(
        (_, event) => ({
            type: "WORKFLOW_INPUT",
            payload: event,
        })
        // { to: "socketConnectionService" }
    ),
};

export default actions;
