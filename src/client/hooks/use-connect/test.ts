// import { useMemo } from "react";
// import { useMachine, State } from "@xstate/react";

// export const useConnect = (a, b) => {
//     const [state, send] = useMachine({a, b})
// }

// export const useGlobalStore = async (a:any, b:any) => {
//     const {spawn} = await import('./machines/global-machine')
//     const machine = spawn({a, b})
//     const [state, send] = useMachine(machine)

//     const global_state = useMemo(() => {
//         if (!state?.context) return;

//     },[])

//     const cachedGlobalState = useMemo(() => {
//         const stateToPersist = JSON.stringify(state)
//         try {
//             localStorage.setItem('global-state', stateToPersist)
//         } catch(e) {
//             console.log('error', e)
//         }
//         if (!state) return;
//         return State.create()
//     },[])
//     return [cachedGlobalState, send]
// }
