import { useMemo } from "react";
import { EventObject, State, Sender, AnyEventObject } from "xstate";
import { useMachine } from "@xstate/react";

import { spawn, IContext, IMachineEvents } from "./machines/connection";
import { IUserWorkflowParams } from "./types";

type WorkflowHookElements<TContext, TMachineEvents extends EventObject> = [
    State<IContext, IMachineEvents>,
    State<TContext, TMachineEvents> | undefined,
    Sender<TMachineEvents>
];
export const useConnect = <
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TContext = any,
    TMachineEvents extends EventObject = AnyEventObject
>({
    host,
    workflow_type,
}) => {
    const machine = spawn({
        host,
        workflow_type,
    });
    const [state, send] = useMachine(machine);
    const workflow_state = useMemo<State<any, any> | undefined>(() => {
        if (!state?.context.workflow_state) return;

        return State.create(JSON.parse(state?.context.workflow_state));
    }, [state?.context.workflow_state]);
    return [
        state,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // workflow_state as State<any, any> | undefined,
        send,
    ];
};

// function useConnect2<
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     TContext = any,
//     TMachineEvents extends EventObject = AnyEventObject
// >({
//     workflow_type,
//     work_offline = true,
//     instance = 0,
//     params,
//     persist = true,
//     session_token = "",
//     socket_host,
// }: IUserWorkflowParams): WorkflowHookElements<TContext, TMachineEvents> {
//     const machine = spawn({
//         workflow_type,
//         instance,
//         work_offline,
//         params,
//         persist,
//         session_token,
//         socket_host,
//     });

//     const [state, send] = useMachine(machine);

//     const workflow_state = useMemo<State<any, any> | undefined>(() => {
//         if (!state?.context.workflow_state) return;

//         return State.create(JSON.parse(state?.context.workflow_state));
//     }, [state?.context.workflow_state]);
//     return [
//         state,
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         workflow_state as State<any, any> | undefined,
//         send,
//     ];
// }

// function useWorkflow<
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     TContext = any,
//     TMachineEvents extends EventObject = AnyEventObject
// >({
//     workflow_type,
//     work_offline = true,
//     instance = 0,
//     params,
//     persist = true,
//     session_token = "",
//     socket_host,
// }: IUserWorkflowParams): WorkflowHookElements<TContext, TMachineEvents> {
//     const machine = spawn({
//         workflow_type,
//         instance,
//         work_offline,
//         params,
//         persist,
//         session_token,
//         socket_host,
//     });

//     const [state, send] = useMachine(machine);
//     // const [workflow_state, setWorkflowState] =
//     //   useState<State<any, any> | undefined>();

//     // const state_json = useRef(state?.context.workflow_state);

//     // useEffect(() => {
//     //   console.warn(`Recalculating State`);
//     //   if (state_json.current !== JSON.stringify(state?.context.workflow_state)) {
//     //     state_json.current = state?.context.workflow_state;
//     //     const new_state = State.create(JSON.parse(state_json.current as string));
//     //     console.warn(`State Updated`);
//     //     setWorkflowState(new_state);
//     //   }
//     // }, [state?.context.workflow_state]);

//     const workflow_state = useMemo<State<any, any> | undefined>(() => {
//         if (!state?.context.workflow_state) return;

//         return State.create(JSON.parse(state?.context.workflow_state));
//     }, [state?.context.workflow_state]);
//     return [
//         state,
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         workflow_state as State<any, any> | undefined,
//         send,
//     ];
// }

// export default useWorkflow;
