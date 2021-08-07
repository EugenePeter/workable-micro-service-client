// import React, {
//     useCallback,
//     useEffect,
//     useMemo,
//     useRef,
//     useState,
// } from "react";
// import { useInterpret, useMachine, useActor, useSelector } from "@xstate/react";
// import { spawn, peek } from "../machines/global-machine";
// import { IContext, IMachineType } from "./types";
// import { resolveRaise } from "xstate/lib/actions";

// export const useGlobalStore = ({ message, machine_type }) => {
//     let running_machine;

//     const [state, setState] = useState<any>();
//     // const startMachine = async () => {
//     //     return new Promise(async (resolve) => {
//     //         const machine = await spawn(message, machine_type);
//     //         // alert(machine);
//     //         console.log("IM BEING CALLED", machine);
//     //         running_machine = machine;
//     //         if (machine) {
//     //             resolve(machine);
//     //         }
//     //     });
//     // };

//     const getMachine = useCallback(() => {
//         return new Promise(async (resolve) => {
//             const machine = await spawn(message, machine_type);
//             // alert(machine);
//             console.log("IM BEING CALLED", machine);
//             running_machine = machine;
//             if (machine) {
//                 resolve(machine);
//                 if (state) return;
//                 // setState(machine);
//                 return machine;
//             }
//         });
//     }, []);

//     useEffect(() => {
//         getMachine();
//     }, [getMachine]);

//     console.log("MACHINE STATE", state);

//     useEffect(() => {
//         // console.log("STATE EFFECT:", getMachine);
//         getMachine()
//             .then(async (res) => {
//                 console.log("RES", res);
//                 if (res != undefined) {
//                     // const test = await res;
//                     // return (yo = await test);
//                     // ref.current = res;
//                     //@ts-ignore
//                     console.log("DLI MAN NI UNDEFIEND", res);
//                     // setState(res);
//                 }
//             })
//             .catch((e) => {
//                 console.log("ERROR:", e);
//             });
//     }, [getMachine]);

//     // ref.current = "test";

//     // console.log("machine", machine);

//     // let hey;
//     // let yo = startMachine()
//     //     .then(async (res) => {
//     //         console.log("RES", res);
//     //         if (res != undefined) {
//     //             const test = await res;
//     //             return (yo = await test);
//     //             console.log("DLI MAN NI UNDEFIEND", test);
//     //         }
//     //     })
//     //     .catch((e) => {
//     //         console.log("ERROR:", e);
//     //     });

//     // const machine = Promise.all(startMachine());
//     // const machine = startMachine();
//     if (state == undefined) return;
//     // console.log("machine state", state);
//     const [globalState, globalSend] = useMachine(state);
//     // console.log("globalState", globalState);
//     // return [globalState, globalSend, test];
// };
// +

// // const condition = (state) => {
// //     return state.matches("loading");
// // };

// // export const PeekMachine = ({ machine_type }: IMachineType) => {
// //     const interpret = useInterpret(running_machine);
// //     console.log("interpret:", interpret);
// //     const { send: interpretedSend } = interpret;
// //     const [actor] = useActor(interpret);
// //     const compare = useSelector(interpret, condition);
// //     return [actor, compare, interpretedSend];
// // };
